import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { updatedUserSchema } from "../../schemas/users.schemas";
import { IUserUp } from "../../interfaces/users.interface";

export async function updateUserService(
  UserId: number,
  newUserData: User
): Promise<IUserUp> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const existingUser: User | null = await userRepository.findOneBy({
    id: UserId,
  });

  const user: User = userRepository.create({
    ...existingUser,
    ...newUserData,
  });

  const updatedUser = await userRepository.save(user);

  return updatedUserSchema.parse(updatedUser);
}
