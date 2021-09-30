import { queryDB } from "../clients/PostgresClient.js";
import { BadRequestError } from "../error/Error.js";
import { validateBuyTicketRequest } from "../validations/BuyTicketValidation.js";
import { verifyToken } from "./AuthService.js";

export const buyTicket = async (request, token) => {
  try {
    validateBuyTicketRequest(request);
    const decodedToken = await verifyToken(token);
    const response = await queryDB(`
      INSERT INTO tickets(user_id,flight_id,seat) VALUES ('${decodedToken.user_id}','${request.flight_id}','${request.seat}') RETURNING *
    `);
    return response.rows[0];
  } catch (err) {
    if (err.constraint === 'tickets_seat_flight_id_unique') {
      throw new BadRequestError("Seat has already been bought");
    }
    throw err;
  }
};
