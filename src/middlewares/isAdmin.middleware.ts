import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const isAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;

  if (user && user.admin) {
    next();
  } else {
    throw new AppError("Unauthorized - Only admin users are allowed", 403);
  }
};
