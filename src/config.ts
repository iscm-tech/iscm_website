import { z } from "zod";

const configSchema = z.object({
  API_ENDPOINT: z.string(),
  SERVER_DOMAIN: z.string(),
  API_PROTOCOL: z.enum(["http", "https"]),
  SERVER_PORT: z.string(),
  EMAIL_APP_USERNAME: z.string(),
  EMAIL_APP_PASS: z.string(),
  EMAIL_RECEIVER: z.string(),
  PRODUCTION_DOMAIN: z.string(),
  GG_ANALYTICS_ID: z.string(),
  GG_CLIENT_ID: z.string(),
  GG_SCERET: z.string(),
  NEXTAUTH_SECRET: z.string(),
});

const configProject = configSchema.safeParse({
  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  SERVER_DOMAIN: process.env.NEXT_PUBLIC_SERVER_DOMAIN,
  API_PROTOCOL: process.env.NEXT_PUBLIC_API_PROTOCOL,
  SERVER_PORT: process.env.NEXT_PUBLIC_SERVER_PORT,
  EMAIL_APP_USERNAME: process.env.NEXT_PUBLIC_EMAIL_APP_USERNAME,
  EMAIL_APP_PASS: process.env.NEXT_PUBLIC_EMAIL_APP_PASS,
  EMAIL_RECEIVER: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
  PRODUCTION_DOMAIN: process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN,
  GG_ANALYTICS_ID: process.env.NEXT_PUBLIC_GG_ANALYTICS_ID,
  GG_CLIENT_ID: process.env.NEXT_PUBLIC_GG_CLIENT_ID,
  GG_SCERET: process.env.NEXT_PUBLIC_GG_SCERET,
  NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
});

if (!configProject.success) {
  console.error(configProject.error);
  throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
}

const envConfig = configProject.data;

export default envConfig;
