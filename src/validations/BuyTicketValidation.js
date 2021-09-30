import { validate } from "./Validator.js";
import Joi from "joi";
export const validateBuyTicketRequest = (input) => {
  const schema = Joi.object({
    flight_id: Joi.string().uuid().required(),
    seat: Joi.string().max(4).required()
  });
  return validate(schema, input);
};
