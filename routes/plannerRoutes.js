import express from "express";
import { generateStudyPlan } from "../controllers/plannerController.js";

const router = express.Router();

router.post("/", generateStudyPlan);

export default router;