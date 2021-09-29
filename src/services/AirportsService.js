import { queryDB } from '../clients/PostgresClient.js';


export const getAllAirports = async (queryParams) => {
  try {
    const response = await queryDB(
      `SELECT a.* FROM airports a
      LEFT JOIN flights f ON f.departure_location = a.id OR f.arrival_location = a.id 
      LEFT JOIN airlines al ON f.airline_id = al.id
      WHERE '${queryParams.airline}' = 'undefined' OR al.name = '${queryParams.airline}'
      GROUP BY a.id;`
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
      `SELECT a.* FROM airports a LEFT JOIN flights f ON f.arrival_location = a.id where f.departure_location = '${airportId}' GROUP BY a.id;`
    );
    return response.rows;
  } catch (err) {
    throw err;
  }
};
