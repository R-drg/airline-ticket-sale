import { validate } from "./Validator.js";
import Joi from "joi";
export const validateUserCreationRequest = (input) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  return validate(schema, input);
};