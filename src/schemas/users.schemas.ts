import { z } from "zod";
import { PaymentType } from "../entities/Payment.entitie";

export const productSchema = z.object({
  category: z.string(),
  name_product: z.string(),
  price: z.string(),
  description: z.string(),
  img: z.string(),
});

export const addressSchema = z.object({
  number: z.string(),
  street: z.string(),
  phone: z.string().min(8),
  neighborhood: z.string(),
});

export const paymentSchema = z.object({
  type: z.nativeEnum(PaymentType),
  Troco: z.number().nullable(),
});

export const userSchema = z.object({
  admin: z.boolean().optional(),
  name: z.string().min(3).max(45),
  password: z.string().optional(),
  address: addressSchema,
  payment: paymentSchema,
  productsList: z.array(productSchema),
});

export const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .omit({ password: true });

export const updatedUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .omit({ password: true, address: true, payment: true, productsList: true });

export const returnMultipleUserSchema = returnUserSchema.array();
