import express from "express";
import { generateFlashcards } from "../controllers/flashcardController.js";
import validate from "../middleware/validate.js";
import { flashcardSchema } from "../validators/flashcardValidator.js";

const router = express.Router();

router.post("/", validate(flashcardSchema), generateFlashcards);

export default router;