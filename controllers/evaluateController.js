import ai from "../config/gemini.js";

export const evaluateAnswer = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const prompt = `
You are an AI teacher.

Evaluate the student's answer.

Question:
${question}

Student Answer:
${answer}

Provide:
1. Score out of 10
2. Feedback
3. Correct explanation

Return ONLY valid JSON in this format:

{
  "score": 0,
  "feedback": "",
  "correct_explanation": ""
}
`;

    const response = await ai.models.generateContent({
     model: "gemini-3.5-flash-lite",
    
      contents: prompt,
    });

    // Remove Markdown code fences if Gemini includes them
    const text = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const evaluation = JSON.parse(text);

    res.json(evaluation);

  } catch (error) {
    console.error("Evaluation Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};