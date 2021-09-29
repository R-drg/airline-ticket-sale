import { BadRequestError } from "../error/Error.js";
export const validate = (schema, input) => {
  const result = schema.validate(input, {
    abortEarly: false,
  });
  if (result.error) throw joiToApiError(result.error);
  return result.value;
};

export const joiToApiError = (err) => {
  var errMsg = {};
  err.details.map((e) => {
    const msg = {
      code: e.type,
      message: e.message,
      context: e.context,
    };
    if (e.context.key in errMsg) {
      errMsg[e.context.key].push(msg);
    } else {
      errMsg[e.context.key] = [msg];
    }
  });

  return new BadRequestError(null, {
    errors: {
      fieldErrors: {
        ...errMsg,
      },
    },
  });
};