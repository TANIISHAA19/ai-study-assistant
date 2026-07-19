import PDFParser from "pdf2json";

export function extractPDFText(filePath) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", errData => {
      reject(errData.parserError);
    });

    pdfParser.on("pdfParser_dataReady", pdfData => {
      let text = "";

      for (const page of pdfData.Pages) {
        for (const item of page.Texts) {
          text += decodeURIComponent(item.R[0].T) + " ";
        }
        text += "\n";
      }

      resolve(text);
    });

    pdfParser.loadPDF(filePath);
  });
}