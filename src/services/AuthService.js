import jwt from "jsonwebtoken";
import { queryDB } from "../clients/PostgresClient.js";
import { UnauthorizedError } from "../error/Error.js";
import { validateLoginRequest } from "../validations/AuthValidation.js";
import { getUserByEmail } from "./UserServices.js";
import md5 from "md5";
import { getRequiredVariable } from "../object-utils.js";

const authConfig = getRequiredVariable("AUTH_SECRET");
export const login = async (req) => {
  const request = validateLoginRequest(req);
  try {
    const user = await getUserByEmail(request.email);
    console.log(user);
    if (!user) {
      throw new UnauthorizedError("Email or password incorrect");
    }
    if (md5(request.password) === user.password) {
      var token = jwt.sign({ user_id: user.id }, authConfig);
      console.log(token);
      await queryDB(
        `INSERT INTO session_tokens(token,created_date,expires) VALUES ('${token}', now(), now() + (20 * interval '1 minute'))`
      );
      return token;
    } else {
      throw new UnauthorizedError("Email or password incorrect");
    }
  } catch (err) {
    throw err;
  }
};

export const logout = async (token) => {
  try {
    var decoded = jwt.verify(token, authConfig);
    const invalid = await queryDB(
      `SELECT * FROM session_tokens WHERE token = '${token}'`
    );
    if (invalid.rows.length < 1) {
      throw new UnauthorizedError("Token invalid");
    }
    await queryDB(`DELETE FROM session_tokens WHERE token = '${token}'`);
    return token;
  } catch (err) {
    throw err;
  }
};

export const verifyToken = async (token) => {
  try {
    var decoded = jwt.verify(token, authConfig);
    var invalid = await queryDB(
      `SELECT * FROM session_tokens WHERE token = '${token}'`
    );
    if (invalid.rows.length < 1) {
      throw new UnauthorizedError("Token invalid");
    }
    if (new Date(invalid.expires) > Date.now()) {
      throw new UnauthorizedError("Token has already expired");
    }
    return decoded;
  } catch (err) {
    throw err;
  }
};
