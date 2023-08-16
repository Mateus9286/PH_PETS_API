import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";

export const createProductService = async (data: any): Promise<void> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const { category, name_product, price, description, img } = data;

  const newProduct: Product = productRepository.create({
    category,
    name_product,
    price,
    description,
    img,
  });

  await productRepository.save(newProduct);
};
