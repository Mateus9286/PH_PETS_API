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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
const data_source_1 = require("../../data-source");
const createLoginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    const user = yield userRepository.findOneBy({
        name: loginData.name,
        admin: true,
    });
    if (!user) {
        throw new errors_1.AppError("Invalid credentials", 401);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(loginData.password, user.password);
    if (!passwordMatch) {
        throw new errors_1.AppError("Invalid credentials", 401);
    }
    const token = jsonwebtoken_1.default.sign({
        admin: user.admin,
    }, (_a = process.env.SECRET_KEY) === null || _a === void 0 ? void 0 : _a.toString(), {
        expiresIn: "72h",
        subject: String(user.id),
    });
    return token;
});
exports.default = createLoginService;
