import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

console.log("Mongoose version:", mongoose.version);
console.log("Node version:", process.version);

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB Connected!");
  process.exit(0);
} catch (err) {
  console.error("❌ Full Error:");
  console.error(err);
  process.exit(1);
}