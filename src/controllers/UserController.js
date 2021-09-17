import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { createUser } from "../services/UserServices.js";

export const USER_CONTROLLER_BASE_URL = "/users";

export const UserController = Router();

UserController.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const response = await createUser(req.body);
    return res.status(201).send(response);
  })
);
