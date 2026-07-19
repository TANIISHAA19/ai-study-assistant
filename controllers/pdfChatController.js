import fs from "fs";
import ai from "../config/gemini.js";
import { extractPDFText } from "./pdfReader.js";

export const chatWithPDF = async (req, res) => {
  try {
    const { question } = req.body;

    if (!req.file) {
      return res.status(400).json({
        error: "Please upload a PDF."
      });
    }

    // Extract text from PDF
    const pdfText = await extractPDFText(req.file.path);

    // Delete uploaded file
    fs.unlinkSync(req.file.path);

    if (!pdfText || pdfText.trim().length === 0) {
      return res.status(400).json({
        error: "No readable text found in the PDF."
      });
    }

    const prompt = `
You are an AI Study Assistant.

Answer ONLY using the information provided in the PDF.

If the answer is not present in the PDF, reply:
"I couldn't find that information in the uploaded PDF."

PDF Content:
${pdfText}

Question:
${question}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      answer: response.text,
    });

  } catch (error) {
    console.error("PDF Chat Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};