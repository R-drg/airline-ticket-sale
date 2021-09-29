import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { getAllAirports, getAllDestinationAirports } from "../services/AirportsService.js";

export const AIRPORTS_CONTROLLER_BASE_URL = "/airports";

export const AirportsController = Router();

AirportsController.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const response = await getAllAirports(req.query);
    return res.status(200).send(response);
  })
);

AirportsController.get(
  "/:id/destinations",
  expressAsyncHandler(async (req, res) => {
    const response = await getAllDestinationAirports(req.params.id);
    return res.status(200).send(response);
  })
);