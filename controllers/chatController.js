import ai from "../config/gemini.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
    });

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("Chat Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};