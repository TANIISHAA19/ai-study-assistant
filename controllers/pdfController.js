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



    fs.unlinkSync(req.file.path);



    const prompt = `
The user uploaded a PDF named "${fileName}".

Respond with:
"PDF received successfully."
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


      } catch(error) {


        attempts++;


        if (attempts === maxAttempts) {
          throw error;
        }


        await new Promise(
          resolve => setTimeout(resolve, 2000)
        );


      }

    }



    res.json({

      summary: response.text,

    });



  } catch(error) {


    console.log("PDF Error:", error);


    res.status(503).json({

      error:
        "AI service is temporarily busy. Please try again."

    });


  }

};