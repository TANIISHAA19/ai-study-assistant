import express from "express";
import { evaluateAnswer } from "../controllers/evaluateController.js";

const router = express.Router();


router.post("/", evaluateAnswer);


export default router;