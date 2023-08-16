"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = exports.pathProductController = exports.getProductController = exports.createProductController = void 0;
const Product_1 = require("../services/Product");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    yield (0, Product_1.createProductService)(productData);
    return res.status(201).json({ message: "Product created successfully" });
});
exports.createProductController = createProductController;
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, Product_1.getProductsService)();
    return res.status(200).json(products);
});
exports.getProductController = getProductController;
const pathProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield (0, Product_1.updateProductService)(parseInt(req.params.id), req.body);
    return res.status(200).json({ product: updatedProduct });
});
exports.pathProductController = pathProductController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, Product_1.deleteProductService)(parseInt(req.params.id));
    return res.status(204).send();
});
exports.deleteProductController = deleteProductController;
