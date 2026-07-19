import express from "express";
import multer from "multer";
import { summarizePDF } from "../controllers/summarizeController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/", upload.single("pdf"), summarizePDF);

export default router;