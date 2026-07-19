import ai from "../config/gemini.js";

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
           model: "gemini-3.5-flash",
            contents: prompt
        });


        res.json({
            quiz: response.text
        });


    } catch(error) {

        console.log("Quiz Error:", error);

        res.status(500).json({
            error:error.message
        });

    }
};