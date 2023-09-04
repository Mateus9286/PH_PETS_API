import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const listUsersService = async (): Promise<any> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find({
    where: { admin: false },
    relations: ["address", "payment", "productsList"],
  });

  return users;
};
