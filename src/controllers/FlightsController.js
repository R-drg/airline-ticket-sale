import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { searchFlights } from "../services/FlightsService.js";
export const FLIGHTS_CONTROLLER_BASE_URL = "/flights";

export const FlightsController = Router();

FlightsController.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const response = await searchFlights(req.query);
    return res.status(200).send(response);
  })
);
