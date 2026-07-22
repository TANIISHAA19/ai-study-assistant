import express from "express";
import { generateQuiz } from "../controllers/quizController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getQuizHistory} from "../controllers/quizHistoryController.js";

const router = express.Router();

router.post(
 "/",
 authMiddleware,
 generateQuiz
);

router.get(
  "/history",
  authMiddleware,
  getQuizHistory
);
export default router;