import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listUsersService,
} from "../services/User";
import { updateUserService } from "../services/User/pathUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  await createUserService(userData);

  return res
    .status(201)
    .json({ message: "User and related entities created successfully" });
};

export const listUsersController = async (req: Request, res: Response) => {
  const Users = await listUsersService();

  return res.status(200).json(Users);
};

export const updateUserController = async (req: Request, res: Response) => {
  const Users = await updateUserService(parseInt(req.params.id), req.body);

  return res.status(200).json(Users);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(parseInt(req.params.id));

  return res.status(204).send();
};
