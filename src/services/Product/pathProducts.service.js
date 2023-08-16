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
exports.updateProductService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
function updateProductService(productId, newProductData) {
    return __awaiter(this, void 0, void 0, function* () {
        const productRepository = data_source_1.AppDataSource.getRepository(entities_1.Product);
        const existingProduct = yield productRepository.findOne({
            where: {
                id: productId,
            },
        });
        const product = productRepository.create(Object.assign(Object.assign({}, existingProduct), newProductData));
        const updatedProduct = yield productRepository.save(product);
        return updatedProduct;
    });
}
exports.updateProductService = updateProductService;