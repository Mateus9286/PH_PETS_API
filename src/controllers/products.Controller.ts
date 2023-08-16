import { Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  getProductsService,
  updateProductService,
} from "../services/Product";

export const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;

  await createProductService(productData);

  return res.status(201).json({ message: "Product created successfully" });
};

export const getProductController = async (req: Request, res: Response) => {
  const products = await getProductsService();

  return res.status(200).json(products);
};

export const pathProductController = async (req: Request, res: Response) => {
  const updatedProduct = await updateProductService(
    parseInt(req.params.id),
    req.body
  );

  return res.status(200).json({ product: updatedProduct });
};

export const deleteProductController = async (req: Request, res: Response) => {
  await deleteProductService(parseInt(req.params.id));

  return res.status(204).send();
};
