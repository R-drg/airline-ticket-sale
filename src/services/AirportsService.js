import { queryDB } from '../clients/PostgresClient.js';


export const getAllAirports = async () => {
  try {
    const response = await queryDB(
      'SELECT * FROM airports'
    );
    return response.rows;
  }
  catch (err) {
    throw err;
  }
}

export const getAllDestinationAirports = async (airportId) => {
  try {
    const response = await queryDB(
      `SELECT a.* FROM airports a LEFT JOIN flights f ON f.arrival_location = a.id where f.departure_location = ${airportId} GROUP BY a.id;`
    );
    return response.rows;
  } catch (err) {
    throw err;
  }
};
