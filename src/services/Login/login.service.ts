import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ILogin } from "../../interfaces/login.interface";

const createLoginService = async (loginData: ILogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    name: loginData.name,
    admin: true,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY?.toString()!,
    {
      expiresIn: "72h",
      subject: String(user.id),
    }
  );

  return token;
};

export default createLoginService;
