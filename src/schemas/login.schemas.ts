import { z } from "zod";

export const createLoginSchema = z.object({
  name: z.string().min(10).max(45),
  password: z.string().min(4).max(120),
});
