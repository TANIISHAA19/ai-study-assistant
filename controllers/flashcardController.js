import Flashcard from "../models/Flashcard.js";
import ai from "../config/gemini.js";
import { PDFParse } from "pdf-parse";

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



    let response;

    let attempts = 0;

    const maxAttempts = 3;



    while (attempts < maxAttempts) {

      try {

        response = await ai.models.generateContent({

          model: "gemini-3.5-flash-lite",

          contents: prompt,

        });


        break;


      } catch (error) {


        attempts++;


        if (attempts === maxAttempts) {
          throw error;
        }


        // wait before retry

        await new Promise(
          resolve => setTimeout(resolve, 2000)
        );

      }

    }




    const text = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();



    const flashcards = JSON.parse(text);



    await Flashcard.create({
      userId: req.user._id,
      topic,

      cards: flashcards,

    });



    res.json({

      flashcards,

    });



  } catch (error) {


    console.error("Flashcard Error:", error);



    res.status(503).json({

      error:
        "AI service is temporarily busy. Please try again.",

    }); 


  }

}; 


           export const generateFlashcardsFromPDF = async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        error: "Please upload a PDF file.",
      });
    }


   const parser = new PDFParse({
        data: req.file.buffer,
         });

   const pdfData = await parser.getText();


    const extractedText = pdfData.text.slice(0, 12000);


    if (!extractedText.trim()) {
      return res.status(400).json({
        error: "Could not extract text from PDF.",
      });
    }



    const prompt = `
You are an AI Study Assistant.

Create 10 flashcards from this study material:

${extractedText}


Each flashcard must contain:
- question
- answer

Return ONLY valid JSON.

Format:

[
 {
  "question": "Question here",
  "answer": "Answer here"
 }
]
`;



    const response = await ai.models.generateContent({

      model: "gemini-3.5-flash-lite",

      contents: prompt,

    });



    const text = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();



    const flashcards = JSON.parse(text);



    await Flashcard.create({
      userId: req.user._id,
      topic: req.file.originalname,

      cards: flashcards,

    });



    res.json({

      flashcards,

    });



  } catch(error) {


    console.error(
      "PDF Flashcard Error:",
      error
    );


    res.status(500).json({

      error:
        "PDF flashcard generation failed.",

    });


  }

};