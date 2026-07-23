import ai from "../config/gemini.js";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    let response;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        response = await ai.models.generateContentStream({
          model: "gemini-3.5-flash-lite",
          contents: message,
        });

        break;

      } catch (error) {
        console.error(`Gemini attempt ${attempt} failed:`, error.message);

        if (error.status === 503 && attempt < 3) {
          await sleep(2000);
        } else {
          throw error;
        }
      }
    }

   let firstChunk = true;

for await (const chunk of response) {
  let text = chunk.text ?? "";

  if (firstChunk) {
    // Remove leading dots and whitespace from the first streamed chunk
    text = text.replace(/^[.\s]+/, "");
    firstChunk = false;
  }

     if (text) {
    res.write(text);
     }
     }
     for await (const chunk of response) {
     let text = chunk.text ?? "";

     if (firstChunk) {
    // Remove leading dots and whitespace from the first streamed chunk
    text = text.replace(/^[.\s]+/, "");
    firstChunk = false;
  }

  if (text) {
    res.write(text);
       }
        }

    res.end();

  } catch (error) {
    console.error("Chat Error:", error);

    if (!res.headersSent) {
      res.status(500).json({
        error: error.message,
      });
    } else {
      res.end();
    }
  }
};