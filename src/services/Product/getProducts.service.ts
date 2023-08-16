import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";

export const getProductsService = async (): Promise<Product[]> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);
  const products: Product[] = await productRepository.find();

  return products;
};
