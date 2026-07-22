import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema(
{
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  topic:{
    type:String,
  },

  cards:[
    {
      question:String,
      answer:String
    }
  ]

},
{
 timestamps:true
}
);


export default mongoose.model(
 "Flashcard",
 flashcardSchema
);