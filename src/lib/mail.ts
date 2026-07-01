"use server";

import envConfig from "@/config";
import { createTransport } from "nodemailer";

export default async function SendmailTransport(
  yourMessage: string,
  subject: string,
  recaptchaToken?: string
) {
  if (recaptchaToken) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey) {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
      const response = await fetch(verifyUrl, { method: "POST" });
      const data = await response.json();

      console.log('Google reCAPTCHA verification response:', data);

      if (!data.success) {
        throw new Error("reCAPTCHA validation failed");
      }

    }
  }
  const transpoter = createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    auth: {
      user: envConfig.EMAIL_APP_USERNAME,
      pass: envConfig.EMAIL_APP_PASS,
    },
  });

  const message = {
    from: "ADMIN ISCM WEBSITE",
    to: envConfig.EMAIL_RECEIVER,
    subject: "[ADMIN ISCM WEBSITE] " + subject,
    html: yourMessage,
  };

  const result = await transpoter.sendMail(message);

  return result;
}
