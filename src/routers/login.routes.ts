import { Router } from "express";
import { createLoginController } from "../controllers/loginController";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createLoginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post(
  "/login",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);

export default loginRoutes;
