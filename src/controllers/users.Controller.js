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
exports.deleteUserController = exports.updateUserController = exports.listUsersController = exports.createUserController = void 0;
const User_1 = require("../services/User");
const pathUser_service_1 = require("../services/User/pathUser.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    yield (0, User_1.createUserService)(userData);
    return res
        .status(201)
        .json({ message: "User and related entities created successfully" });
});
exports.createUserController = createUserController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Users = yield (0, User_1.listUsersService)();
    return res.status(200).json(Users);
});
exports.listUsersController = listUsersController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Users = yield (0, pathUser_service_1.updateUserService)(parseInt(req.params.id), req.body);
    return res.status(200).json(Users);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, User_1.deleteUserService)(parseInt(req.params.id));
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
