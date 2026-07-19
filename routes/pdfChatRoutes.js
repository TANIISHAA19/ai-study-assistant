import express from "express";
import multer from "multer";
import { chatWithPDF } from "../controllers/pdfChatController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/", upload.single("pdf"), chatWithPDF);

export default router;