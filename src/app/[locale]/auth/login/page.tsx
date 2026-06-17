"use client";

import React, { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import authServices from "@/services/auth.service";

import "../../../style.css";
import "./style.css";
import "@/assets/plugins/bootstrap/bootstrap.min.css";
import "@/assets/scss/style.scss";

import { setCookie } from "@/lib/cookies";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { LoginBodySchema } from "@/schemaValidations/auth.schema";
import { useLocale } from "next-intl";
import { barlow } from "@/app/fontDeclare";
import { LinkIcon, MessageCircleWarning } from "lucide-react";
import { Modal } from "antd";
import Link from "next/link";

const LoginWithUsernameAndPassword = () => {
  const router = useRouter();
  const locale = useLocale();
  const { toast } = useToast();

  const [isError, setIsError] = useState<boolean>(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginForm = new FormData(e.target as HTMLFormElement);
    const email = loginForm.get("email"),
      password = loginForm.get("password");

    try {
      const loginBodyParse = LoginBodySchema.safeParse({
        username: email,
        password: password,
        auth_provider: "password",
      });

      if (loginBodyParse.error) {
        setIsError(true);
        throw new Error(loginBodyParse.error.toString());
      }

      const {
        payload: { data, message },
      } = await authServices.login(loginBodyParse.data);

      await setCookie("sessionToken", data.token, data.expires.toString());

      router.push("/admins/dashboard");
      toast({
        title: message,
        duration: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h3 className="w-fit text-4xl font-extrabold mb-10! relative left-1/2 -translate-x-1/2 after:w-[50%] after:h-[3px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
        {locale === "en"
          ? "Adminstrator Page Login"
          : "Đăng nhập trang quản trị"}
      </h3>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <div className="control-group">
          <label
            htmlFor="email"
            className="block text-base mb-1 transition-colors"
          >
            {locale === "en" ? "Username" : "Tên đăng nhập"}
          </label>
          <div
            className={`border-b-2 ${
              isError ? "border-red-500" : "border-black"
            } flex items-center`}
          >
            <input
              className="text-base outline-none mr-1 flex-1 p-1 inline-block bg-transparent"
              type="text"
              required
              id="email"
              name="email"
              autoComplete="email"
            />
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className="control-group">
          <label
            htmlFor="password"
            className="block text-base mb-1 transition-colors"
          >
            {locale === "en" ? "Password" : "Mật khẩu"}
          </label>
          <div
            className={`border-b-2 ${
              isError ? "border-red-500" : "border-black"
            } flex items-center`}
          >
            <input
              className="text-base outline-none mr-1 flex-1 p-1 inline-block bg-transparent"
              type="password"
              required
              name="password"
              id="password"
            />
            <i className="fa-solid fa-unlock-keyhole"></i>
          </div>
        </div>
        {isError && (
          <p className="text-sm italic text-red-600">
            <i className="fa-solid fa-circle-exclamation mr-1"></i> Incorrect
            username or password.
          </p>
        )}
        <button className="w-full bg-black text-white text-base py-2 rounded-lg">
          {locale === "en" ? "Login" : "Đăng nhập"}
        </button>
      </form>
    </div>
  );
};

const LoginWithGoogle = () => {
  const locale = useLocale();
  return (
    <div
      id="customBtn"
      className="customGPlusSignIn w-full inline-block text-center bg-white text-[#444] rounded-lg border-[0.2px] hover:border border-[#888] shadow-md shadow-[grey] cursor-pointer hover:shadow-none transition-all"
      onClick={() => {
        signIn("google", { callbackUrl: "/iscmer" });
      }}
    >
      <span
        className="w-11 h-11 inline-block align-middle"
        style={{
          backgroundImage: "url(/images/icons/g-normal.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></span>
      <span className="inline-block px-11 align-middle text-base">
        {locale === "en" ? "Login with Google" : "Đăng nhập bằng Google"}
      </span>
    </div>
  );
};

const Auth = () => {
  const locale = useLocale();

  return (
    <div className="wrapper bg-[#5a0000] w-screen h-screen">
      <div className="container">
        <div className="row rounded-b-md overflow-hidden">
          <figure className="w-full h-full !p-0 !m-0">
            <Image
              src="/images/backgrounds/background.png"
              width={2000}
              height={2000}
              alt=""
              className="w-full h-full object-contain opacity-95"
              quality={100}
            />
          </figure>
        </div>
        <div className="row">
          <div className="!py-4 w-full h-full z-10">
            <div
              className="rounded-lg bg-white flex flex-col gap-3 w-full h-full p-3"
              style={{
                boxShadow: "0 0 10px rgba(255,255,255,0.4)",
                backdropFilter: "blur(2px)",
              }}
            >
              <LoginWithUsernameAndPassword />
              <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex-1 h-[1px] w-full bg-black"></div>
                <p className="mb-0!">
                  {locale === "en"
                    ? "For ISCMer Page"
                    : "Truy cập trang ISCMer"}
                </p>
                <div className="flex-1 h-[1px] w-full bg-black"></div>
              </div>
              <LoginWithGoogle />
              <div className="flex items-center justify-between gap-2 mt-3">
                <div className="flex-1 h-[1px] w-full bg-black"></div>
                <p className="mb-0!">{locale === "en" ? "Or" : "Hoặc"}</p>
                <div className="flex-1 h-[1px] w-full bg-black"></div>
              </div>

              <Link
                href={"https://forms.gle/FNLB57d2qoa7Zyc2A"}
                className="py-2 w-full inline-block text-center bg-white text-[#444] rounded-lg border-[0.2px] hover:border border-[#888] shadow-md shadow-[grey] cursor-pointer hover:shadow-none transition-all"
              >
                {locale === "en" ? "Sign up" : "Đăng ký"}
              </Link>

              <div className="text-base! text-[#cd2027]!">
                {locale === "en" ? (
                  <>
                    * New personnel who do not yet have access to the ISCMer
                    page are required to sign up to be granted access.
                  </>
                ) : (
                  <>
                    * Nhân sự mới hoàn toàn, chưa truy cập được vào trang ISCMer
                    cần phải đăng ký để được cấp quyền truy cập trang.
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
