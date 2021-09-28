import pg from "pg";
import { BadRequestError } from "../error/Error.js";
import { getRequiredVariable } from "../object-utils.js";

export const queryDB = async (queryString) => {
  const client = new pg.Client({
    connectionString: getRequiredVariable("DB_CONNECTION_STRING"),
  });
  try {
    client.connect();
    const result = await client.query(queryString);
    client.end();
    return result;
  } catch (err) {
    client.end();
    if (err.constraint === "user_email_unique") {
      throw new BadRequestError("E-mail is already registered");
    }
    throw err;
  }
};
