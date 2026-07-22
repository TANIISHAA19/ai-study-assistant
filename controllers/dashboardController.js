import Quiz from "../models/Quiz.js";
import Flashcard from "../models/Flashcard.js";
import Summary from "../models/Summary.js";

export const getDashboardStats = async (req, res) => {
  try {
    const quizCount = await Quiz.countDocuments({
      user: req.user._id,
    });

    const flashcardCount = await Flashcard.countDocuments({
      userId: req.user._id,
    });

    const summaryCount = await Summary.countDocuments({
      userId: req.user._id,
    });

    res.json({
      quizCount,
      flashcardCount,
      summaryCount,
      plannerCount: 0,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
};