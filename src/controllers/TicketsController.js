import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { buyTicket } from "../services/TicketsService.js";


export const TICKETS_CONTROLLER_BASE_URL = "/tickets";

export const TicketsController = Router();

TicketsController.post(
  "/buy",
  expressAsyncHandler(async (req, res) => {
    const response = await buyTicket(req.body, req.headers['authorization']);
    return res.status(201).send(response);
  })
);