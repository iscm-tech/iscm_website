"use client";

import authServices from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";
import { useEffect } from "react";

export default function CheckToken() {
  const redirect = useRouter();

  useEffect(() => {
    async function checkToken() {
      try {
        const res = await authServices.checkToken();
        await setCookie("sessionToken", res.payload.token, res.payload.expires);

        if (!window.location.toString().includes("dashboard"))
          redirect.replace("/admins/dashboard");
      } catch (error) {
        console.log("Error checking token:", error);
        // Handle the error as needed, e.g., redirect to login or show an error message
        await deleteCookie("sessionToken"); // Delete the session token cookie
        redirect.replace("/auth/login"); // Redirect to the login page
      }
    }

    checkToken();
  }, [redirect]);

  return <></>;
}
