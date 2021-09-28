import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { createUser,deleteUser,getAllUsers, getUserById, updateUser } from "../services/UserServices.js";

export const USER_CONTROLLER_BASE_URL = "/users";

export const UserController = Router();

UserController.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const response = await createUser(req.body);
    return res.status(201).send(response);
  })
);

UserController.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const response = await getAllUsers();
    return res.status(200).send(response);
  })
);

UserController.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const response = await getUserById(req.params.id);
    return res.status(200).send(response);
  })
);

UserController.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    await deleteUser(req.params.id);
    return res.status(200).send(`User with id ${req.params.id} has been deleted.`);
  })
);

UserController.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const response = await updateUser(req.params.id,req.body);
    return res
      .status(200)
      .send(response);
  })
);