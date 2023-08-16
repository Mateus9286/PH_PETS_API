import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  pathProductController,
} from "../controllers";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureProductExistsMiddleware } from "../middlewares/ensureProductsExists.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { productSchema } from "../schemas/users.schemas";

const productsRoutes: Router = Router();

productsRoutes.post(
  "/products",
  ensureTokenIsValidMiddleware,
  isAdminMiddleware,
  ensureDataIsValidMiddleware(productSchema),
  createProductController
);

productsRoutes.get("/products", getProductController);

productsRoutes.patch(
  "/products/:id",
  ensureTokenIsValidMiddleware,
  isAdminMiddleware,
  ensureProductExistsMiddleware,
  pathProductController
);

productsRoutes.delete(
  "/products/:id",
  ensureTokenIsValidMiddleware,
  isAdminMiddleware,
  ensureProductExistsMiddleware,
  deleteProductController
);

export default productsRoutes;
