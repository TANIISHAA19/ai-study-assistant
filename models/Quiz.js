import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    topic:{
        type:String,
        required:true
    },

    questions:{
        type:Array,
        required:true
    }

},
{
    timestamps:true
}
);


export default mongoose.model("Quiz", quizSchema);