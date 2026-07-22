import ai from "../config/gemini.js";

export const explainTopic = async (req, res) => {

    try {

        const { topic, level } = req.body;

        const prompt = `
        Explain the topic "${topic}" 
        for a ${level || "beginner"} student.

        Include:
        - Simple definition
        - Real life example
        - Key points
        - Short summary
        `;


        const response = await ai.models.generateContent({
           model: "gemini-3.5-flash-lite",
           
            contents: prompt
        });


        res.json({
            explanation: response.text
        });


    } catch(error) {

        console.log("Learn Error:", error);

        res.status(500).json({
            error: error.message
        });

    }
};