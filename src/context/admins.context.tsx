"use client";

import { UserType } from "@/schemaValidations/account.schema";
import React, { createContext } from "react";

const AdminsAccountContext = createContext<{
  account: UserType | null;
  setAccount: React.Dispatch<
    React.SetStateAction<((account: UserType) => void) | null>
  >;
} | null>(null);

export default function AdminsProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {}
