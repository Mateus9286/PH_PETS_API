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
exports.createUserService = void 0;
const entities_1 = require("../../entities");
const ProductList_entitie_1 = require("../../entities/ProductList.entitie");
const data_source_1 = require("../../data-source");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { admin, name, password, productsList } = data;
    const { number, street, phone, neighborhood } = data.address;
    const { type, Troco } = data.payment;
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    const addressRepository = data_source_1.AppDataSource.getRepository(entities_1.Address);
    const paymentRepository = data_source_1.AppDataSource.getRepository(entities_1.Payment);
    const productListRepository = data_source_1.AppDataSource.getRepository(ProductList_entitie_1.ProductList);
    const user = new entities_1.User();
    user.admin = admin;
    user.name = name;
    user.password = password || process.env.SECRET_KEY;
    const savedUser = yield userRepository.save(user);
    const address = new entities_1.Address();
    address.number = number;
    address.street = street;
    address.phone = phone;
    address.neighborhood = neighborhood;
    address.user = savedUser;
    yield addressRepository.save(address);
    const payment = new entities_1.Payment();
    payment.type = type;
    payment.Troco = String(Troco);
    payment.user = savedUser;
    yield paymentRepository.save(payment);
    const productEntities = productsList.map((productInfo) => {
        const product = new ProductList_entitie_1.ProductList();
        product.category = productInfo.category;
        product.name_product = productInfo.name_product;
        product.price = Number(productInfo.price);
        product.description = productInfo.description;
        product.img = productInfo.img;
        product.user = savedUser;
        return product;
    });
    yield productListRepository.save(productEntities);
});
exports.createUserService = createUserService;
