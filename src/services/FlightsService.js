import { queryDB } from "../clients/PostgresClient.js";

export const searchFlights = async (params) => {
  try {
    let query = `
    SELECT f.* FROM flights f
    LEFT JOIN airports a ON a.id = f.arrival_location OR a.id = f.departure_location
    WHERE ${
      params.arrival ? "'" + params.arrival + "'" : "NULL"
    } IS NULL or f.arrival_location = ${
      params.arrival ? "'" + params.arrival + "'" : "NULL"
    }
    AND ${
      params.departure ? "'" + params.departure + "'" : "NULL"
    } IS NULL or f.departure_location = ${
      params.departure ? "'" + params.departure + "'" : "NULL"
    }
    GROUP BY f.id`;
    if (params.cheapest) {
      query += ' ORDER BY f.price limit 1'
    }
    const response = await queryDB(query);
    if (response.rows.length == 1) {
      return response.rows[0];
    }
    return response.rows;
  }
  catch (err) {
    throw err;
  }
}
