import { validate } from "./Validator.js";
import Joi from "joi";
export const validateLoginRequest = (input) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  return validate(schema, input);
};
