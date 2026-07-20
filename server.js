import dns from "dns";

dns.setDefaultResultOrder("ipv4first");



import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chatRoutes.js";
import learnRoutes from "./routes/learnRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import evaluateRoutes from "./routes/evaluateRoutes.js";
import summarizeRoutes from "./routes/summarizeRoutes.js";
import pdfChatRoutes from "./routes/pdfChatRoutes.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";
import plannerRoutes from "./routes/plannerRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
import connectDB from "./config/db.js";
const app = express();

connectDB();
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("AI Study Assistant Backend Running!");
});


app.use("/api/chat", chatRoutes);
app.use("/api/learn", learnRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/evaluate", evaluateRoutes);
app.use("/api/summarize", summarizeRoutes);
app.use("/api/pdf-chat", pdfChatRoutes);
app.use("/api/flashcards", flashcardRoutes);
app.use("/api/planner", plannerRoutes);
app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 3000;

app.post("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Server is working!"
  });
});


import errorHandler from "./middleware/errorHandler.js";

// Keep this AFTER all app.use(...) routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});