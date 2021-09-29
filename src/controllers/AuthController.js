import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { login, logout, verifyToken } from "../services/AuthService.js";

export const AUTH_CONTROLLER_BASE_URL = "/";

export const AuthController = Router();

AuthController.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const response = await login(req.body);
    return res.status(200).send({ token: response });
  })
);

AuthController.post(
  "/verifyToken",
  expressAsyncHandler(async (req, res) => {
    const response = await verifyToken(req.headers['authorization']);
    return res.status(200).send(response);
  })
);

AuthController.post(
  "/logout",
  expressAsyncHandler(async (req, res) => {
    const response = await logout(req.headers["authorization"]);
    return res.status(200).send();
  })
);

