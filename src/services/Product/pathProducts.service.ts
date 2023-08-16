import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";

export async function updateProductService(
  productId: any,
  newProductData: any
) {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const existingProduct = await productRepository.findOne({
    where: {
      id: productId,
    },
  });

  const product = productRepository.create({
    ...existingProduct,
    ...newProductData,
  });

  const updatedProduct = await productRepository.save(product);

  return updatedProduct;
}
