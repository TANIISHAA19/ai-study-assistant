import fs from "fs";
import ai from "../config/gemini.js";

export const summarizePDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "Please upload a PDF."
      });
    }

    const fileName = req.file.originalname;

    // Delete uploaded file after receiving it
    fs.unlinkSync(req.file.path);

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `The user uploaded a PDF named "${fileName}". Respond with: "PDF received successfully."`
    });

    res.json({
      summary: response.text
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
};