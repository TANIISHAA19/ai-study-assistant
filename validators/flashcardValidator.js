import Joi from "joi";

export const flashcardSchema = Joi.object({
  topic: Joi.string().min(2).required(),
});