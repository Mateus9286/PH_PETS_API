import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";

export const deleteProductService = async (
  idProduct: number
): Promise<void> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const productToDelete: Product | null = await productRepository.findOne({
    where: { id: idProduct },
  });

  await productRepository.remove(productToDelete!);
};
