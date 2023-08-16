import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { returnMultipleUserSchema } from "../../schemas/users.schemas";
import { IUsersReturn } from "../../interfaces/users.interface";

export const listUsersService = async (): Promise<IUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find({
    where: { admin: false },
    relations: ["address", "payment", "productsList"],
  });

  return returnMultipleUserSchema.parse(users);
};
