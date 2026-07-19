import fs from "fs";
import ai from "../config/gemini.js";
import { extractPDFText } from "./pdfReader.js";

export const summarizePDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "Please upload a PDF."
      });
    }

    // Extract text from PDF
    const pdfText = await extractPDFText(req.file.path);

    // Delete uploaded file
    fs.unlinkSync(req.file.path);

    // If PDF has no readable text
    if (!pdfText || pdfText.trim().length === 0) {
      return res.status(400).json({
        error: "No readable text found in the PDF."
      });
    }

    const prompt = `
You are an AI Study Assistant.

Summarize the following study notes in simple language.

Notes:
${pdfText}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      summary: response.text,
    });

  } catch (error) {
    console.error("Summary Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};