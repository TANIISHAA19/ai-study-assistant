import Quiz from "../models/Quiz.js";

export const getQuizHistory = async (req, res) => {
  try {

    const quizzes = await Quiz.find({
      user: req.user._id
    }).sort({
      createdAt: -1
    });

    res.json({
      quizzes
    });

  } catch (error) {

    console.log("Quiz History Error:", error);

    res.status(500).json({
      error: error.message
    });

  }
};