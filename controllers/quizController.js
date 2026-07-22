import ai from "../config/gemini.js";
import Quiz from "../models/Quiz.js";

export const generateQuiz = async (req, res) => {

    try {

        const { topic, questions } = req.body;

        const prompt = `
        Create a quiz on "${topic}".

        Generate ${questions || 5} multiple choice questions.

        Return ONLY JSON format:

        [
          {
            "question": "",
            "options": [
              "",
              "",
              "",
              ""
            ],
            "answer": ""
          }
        ]
        `;


        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });


        const quizData = JSON.parse(response.text);


        const savedQuiz = await Quiz.create({
            user: req.user._id,
            topic,
            questions: quizData
        });


        res.json({
            message: "Quiz generated successfully",
            quiz: quizData,
            id: savedQuiz._id
        });


    } catch(error) {

        console.log("Quiz Error:", error);

        res.status(500).json({
            error:error.message
        });

    }
};