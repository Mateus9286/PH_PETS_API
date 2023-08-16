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
exports.updateUserService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const users_schemas_1 = require("../../schemas/users.schemas");
function updateUserService(UserId, newUserData) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
        const existingUser = yield userRepository.findOneBy({
            id: UserId,
        });
        const user = userRepository.create(Object.assign(Object.assign({}, existingUser), newUserData));
        const updatedUser = yield userRepository.save(user);
        return users_schemas_1.updatedUserSchema.parse(updatedUser);
    });
}
exports.updateUserService = updateUserService;
