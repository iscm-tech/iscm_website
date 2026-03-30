import { z } from "zod";

export const LoginBodySchema = z.discriminatedUnion("auth_provider", [
  z.object({
    auth_provider: z.literal("google"),
    username: z.string().email(),
  }),
  z.object({
    auth_provider: z.literal("password"),
    username: z.string().email().or(z.literal("admin")),
    password: z.string().min(8),
  }),
]);
export type LoginBodyType = z.TypeOf<typeof LoginBodySchema>;

export const LoginRes = z.object({
  data: z.object({
    token: z.string(),
    exprs: z.date(),
  }),
  message: z.string(),
});

export type LoginResType = z.TypeOf<typeof LoginRes>;
export const SlideSessionBody = z.object({}).strict();

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>;
export const SlideSessionRes = LoginRes;

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>;
