import { queryDB } from '../clients/PostgresClient.js';
import { validateUserCreationRequest } from '../validations/UserValidation.js';
import md5 from 'md5';
export const createUser = async (request) => {
  try {
    validateUserCreationRequest(request);
    const response = await queryDB(
      `INSERT INTO users(name,email,password) VALUES ('${request.name}','${
        request.email
      }','${md5(request.password)}') RETURNING *`
    );
    return response;
  }
  catch (err) {
    throw err;
  }
}