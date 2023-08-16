import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const deleteUserService = async (idUser: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToDelete: User | null = await userRepository.findOne({
    where: { id: idUser },
    relations: ["address", "payment", "productsList"],
  });

  if (
    userToDelete!.payment &&
    userToDelete!.address &&
    userToDelete!.productsList
  ) {
    await userRepository.manager.remove(userToDelete!.payment);
    await userRepository.manager.remove(userToDelete!.address);
    await userRepository.manager.remove(userToDelete!.productsList);
  }

  await userRepository.remove(userToDelete!);
};
