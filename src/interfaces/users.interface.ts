import {
  userSchema,
  returnUserSchema,
  returnMultipleUserSchema,
  updatedUserSchema,
} from "../schemas/users.schemas";
import { z } from "zod";
import { DeepPartial } from "typeorm";

export type IUser = z.infer<typeof userSchema>;
export type IUserUp = z.infer<typeof updatedUserSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
export type IUsersReturn = z.infer<typeof returnMultipleUserSchema>;
export type IUserUpdate = DeepPartial<IUser>;
