import Flashcard from "../models/Flashcard.js";
import ai from "../config/gemini.js";

export const generateFlashcards = async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({
        error: "Topic is required.",
      });
    }

    const prompt = `
You are an AI Study Assistant.

Generate 10 flashcards on the topic: "${topic}".

Each flashcard should contain:
- question
- answer

Return ONLY valid JSON.

Example:

[
  {
    "question": "What is OOP?",
    "answer": "Object-Oriented Programming"
  }
]
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const text = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const flashcards = JSON.parse(text);

    await Flashcard.create({
      topic,
      cards: flashcards,
    });

    res.json({
      flashcards,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
};