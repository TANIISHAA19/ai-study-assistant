import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  generateFlashcards,
  generateFlashcardsFromPDF,
} from "../controllers/flashcardController.js";

import validate from "../middleware/validate.js";
import { flashcardSchema } from "../validators/flashcardValidator.js";
import upload from "../middleware/upload.js";


const router = express.Router();


// Existing topic-based flashcards
router.post(
  "/",
  authMiddleware,
  validate(flashcardSchema),
  generateFlashcards
);


// New PDF-based flashcards
router.post(
  "/upload",
   authMiddleware,
  upload.single("pdf"),
  generateFlashcardsFromPDF
);


export default router;