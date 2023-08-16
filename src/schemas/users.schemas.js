"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnMultipleUserSchema = exports.updatedUserSchema = exports.returnUserSchema = exports.userSchema = exports.paymentSchema = exports.addressSchema = exports.productSchema = void 0;
const zod_1 = require("zod");
const Payment_entitie_1 = require("../entities/Payment.entitie");
exports.productSchema = zod_1.z.object({
    category: zod_1.z.string(),
    name_product: zod_1.z.string(),
    price: zod_1.z.string(),
    description: zod_1.z.string(),
    img: zod_1.z.string(),
});
exports.addressSchema = zod_1.z.object({
    number: zod_1.z.string(),
    street: zod_1.z.string(),
    phone: zod_1.z.string().min(8),
    neighborhood: zod_1.z.string(),
});
exports.paymentSchema = zod_1.z.object({
    type: zod_1.z.nativeEnum(Payment_entitie_1.PaymentType),
    Troco: zod_1.z.number().nullable(),
});
exports.userSchema = zod_1.z.object({
    admin: zod_1.z.boolean().optional(),
    name: zod_1.z.string().min(3).max(45),
    password: zod_1.z.string().optional(),
    address: exports.addressSchema,
    payment: exports.paymentSchema,
    productsList: zod_1.z.array(exports.productSchema),
});
exports.returnUserSchema = exports.userSchema
    .extend({
    id: zod_1.z.number(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
})
    .omit({ password: true });
exports.updatedUserSchema = exports.userSchema
    .extend({
    id: zod_1.z.number(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
})
    .omit({ password: true, address: true, payment: true, productsList: true });
exports.returnMultipleUserSchema = exports.returnUserSchema.array();
