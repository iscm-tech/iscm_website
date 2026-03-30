"use server";

import envConfig from "@/config";
import { createTransport } from "nodemailer";

export default async function SendmailTransport(
  yourMessage: string,
  subject: string
) {
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
