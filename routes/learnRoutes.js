import express from "express";
import { explainTopic } from "../controllers/learnController.js";

const router = express.Router();


router.post("/", explainTopic);


export default router;