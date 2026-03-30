import NextAuth from "next-auth";
import { authOpts } from "@/lib/nextAuthOpts";

const handler = NextAuth(authOpts);

export { handler as GET, handler as POST };
