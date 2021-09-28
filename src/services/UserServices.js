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
    return response.rows[0];
  }
  catch (err) {
    throw err;
  }
}

export const getAllUsers = async () => {
  try {
    const response = await queryDB(
      'SELECT * FROM users'
    );
    return response.rows;
  }
  catch (err) {
    throw err;
  }
}

export const getUserById = async (userId) => {
  try {
    const response = await queryDB(`SELECT * FROM users where id = '${userId}'`);
    return response.rows[0];
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await queryDB(`DELETE FROM users where id = '${userId}'`);
    return response;
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (userId,request) => {
  try {
    validateUserCreationRequest(request);
    const response = await queryDB(`UPDATE users set name = '${request.name}', 
    email = '${request.email}', 
    password = '${md5(request.password)}' 
    WHERE id = '${userId}' RETURNING *`);
    return response.rows[0];
  } catch (err) {
    throw err;
  }
};