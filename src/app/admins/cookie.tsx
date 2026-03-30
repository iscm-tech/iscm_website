"use client";

import { getCookie, setCookie } from "@/lib/cookies";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Cookie() {
  const currentPathname = usePathname();

  // This function checks if the 'sessionToken' cookie exists.
  // If not, it tries to restore it from localStorage (if available).
  // If neither exists, it redirects the user to the login page.
  // If the cookie exists and the current path is not the dashboard, it redirects to the dashboard.
  async function cookie() {
    const cookies = await getCookie("sessionToken");

    if (!cookies) {
      const storage = localStorage.getItem("sessionToken");
      if (storage) {
        const token: { token: string; expiresAt: string } = JSON.parse(storage);
        if (new Date(token.expiresAt) < new Date()) {
          localStorage.removeItem("sessionToken");
          redirect("/admins/auth/login");
        } else {
          await setCookie("sessionToken", token.token, token.expiresAt);
          redirect("/admins/dashboard");
        }
      } else {
        redirect("/admins/auth/login");
      }
    } else {
      if (!currentPathname.includes("dashboard")) redirect("/admins/dashboard");
    }
  }
  useEffect(() => {
    cookie();
  }, []);

  return <></>;
}
