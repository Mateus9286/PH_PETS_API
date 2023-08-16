import { Request, Response } from "express";
import createLoginService from "../services/Login/login.service";
import { ILogin } from "../interfaces/login.interface";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: ILogin = req.body;

  const token: string = await createLoginService(loginData);

  return res.json({
    token: token,
  });
};
