import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.Controller";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";

const userRoutes: Router = Router();

userRoutes.post("/user", createUserController);

userRoutes.get(
  "/user",
  ensureTokenIsValidMiddleware,
  isAdminMiddleware,
  listUsersController
);

userRoutes.patch(
  "/user/:id",
  ensureTokenIsValidMiddleware,
  isAdminMiddleware,
  ensureUserExistsMiddleware,
  updateUserController
);

userRoutes.delete(
  "/user/:id",
  ensureTokenIsValidMiddleware,
  isAdminMiddleware,
  ensureUserExistsMiddleware,
  deleteUserController
);

export default userRoutes;
