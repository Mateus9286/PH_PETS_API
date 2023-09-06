import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./errors";
import "reflect-metadata";
import "dotenv/config";
import { loginRoutes, productsRoutes, userRoutes } from "./routers";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(handleErrors);
app.use(userRoutes);
app.use(productsRoutes);
app.use(loginRoutes);

export default app;
