"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoginSchema = void 0;
const zod_1 = require("zod");
exports.createLoginSchema = zod_1.z.object({
    name: zod_1.z.string().min(10).max(45),
    password: zod_1.z.string().min(4).max(120),
});