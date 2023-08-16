"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.productsRoutes = exports.loginRoutes = void 0;
const login_routes_1 = __importDefault(require("./login.routes"));
exports.loginRoutes = login_routes_1.default;
const products_routes_1 = __importDefault(require("./products.routes"));
exports.productsRoutes = products_routes_1.default;
const users_routes_1 = __importDefault(require("./users.routes"));
exports.userRoutes = users_routes_1.default;
