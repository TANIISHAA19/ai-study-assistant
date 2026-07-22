import mongoose from "mongoose";

const summarySchema = new mongoose.Schema(
{
 userId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
  required:true
 },

 fileName:String,

 summary:String

},
{
 timestamps:true
}
);


export default mongoose.model(
"Summary",
summarySchema
);