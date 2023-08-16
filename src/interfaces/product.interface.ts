import { productSchema } from "../schemas/users.schemas";
import { z } from "zod";

export type IProduct = z.infer<typeof productSchema>;
