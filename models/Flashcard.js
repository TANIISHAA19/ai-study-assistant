import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },

    cards: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;