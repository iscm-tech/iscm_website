import http from "@/lib/http";
import { LoginBodyType, LoginResType } from "@/schemaValidations/auth.schema";

const authServices = {
  login: (body: LoginBodyType) =>
    http.post<LoginResType>("api/users/login", body),
  checkToken: () =>
    http.post<{ message: string; token: string; expires: string }>(
      "api/users/checked-valid-session",
      {},
    ),
};

export default authServices;
