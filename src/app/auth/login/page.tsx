"use client";

import React, { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import authServices from "@/services/auth.service";

import "../../style.css";
import "./style.css";
import "@/assets/plugins/bootstrap/bootstrap.min.css";
import "@/assets/scss/style.scss";

import { setCookie } from "@/lib/cookies";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { LoginBodySchema } from "@/schemaValidations/auth.schema";

const LoginWithUsernameAndPassword = () => {
  const router = useRouter();
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
      });

      if (loginBodyParse.error) {
        setIsError(true);
        throw new Error(loginBodyParse.error.toString());
      }

      const {
        payload: { data, message },
      } = await authServices.login(loginBodyParse.data);

      console.log(data.token, "login token");

      await setCookie("sessionToken", data.token, data.exprs.toString());

      localStorage.setItem(
        "sessionToken",
        JSON.stringify({ token: data.token, expires: data.exprs }),
      );

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
      <h3 className="w-fit text-4xl font-extrabold mb-7 relative left-1/2 -translate-x-1/2 after:w-[50%] after:h-[3px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
        Login
      </h3>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <div className="control-group">
          <label
            htmlFor="email"
            className="block text-base mb-1 transition-colors"
          >
            Username
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
            Password
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
          Submit
        </button>
      </form>
    </div>
  );
};

const LoginWithGoogle = () => {
  return (
    <div
      id="customBtn"
      className="customGPlusSignIn w-full inline-block text-center bg-white text-[#444] rounded-lg border-[0.2px] hover:border border-[#888] shadow-md shadow-[grey] cursor-pointer hover:shadow-none transition-all "
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
        Login with Google
      </span>
    </div>
  );
};

const Auth = () => {
  return (
    <div className="row w-screen h-screen overflow-hidden px-[15px] bg-[#890a17]">
      <figure className="col-8 h-full !p-0">
        <Image
          src="/images/backgrounds/ISCM_Group.png"
          width={2000}
          height={2000}
          alt=""
          className="w-full h-full object-contain opacity-95"
          quality={100}
        />
      </figure>

      <div className="col-4 !py-4 w-full h-full z-10">
        <div
          className="rounded-lg bg-white flex flex-col gap-3 w-full h-full p-3"
          style={{
            boxShadow: "0 0 10px rgba(255,255,255,0.4)",
            backdropFilter: "blur(2px)",
          }}
        >
          <LoginWithUsernameAndPassword />
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
};

export default Auth;
