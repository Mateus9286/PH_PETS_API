import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entities";
import { AppError } from "../errors";

export const ensureProductExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const findProduct = await productRepository.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }

  return next();
};
