import envConfig from "@/config";
import authServices from "@/services/auth.service";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { deleteCookie } from "./cookies";

export const authOpts: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: envConfig.GG_CLIENT_ID,
      clientSecret: envConfig.GG_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: envConfig.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return !!user.email;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      if (new URL(url).origin === baseUrl) {
        return url;
      }

      return baseUrl;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "google" && user?.email) {
        try {
          const res = await authServices.login({
            username: user.email,
            auth_provider: "google",
          });

          const sessionToken = res?.payload.data.token;

          if (!sessionToken) {
            throw new Error("Session invalid!");
          }

          token.AT = sessionToken;
          token.email = user.email;
        } catch (error) {
          token.authError = "BACKEND_LOGIN_FAILED";
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
      }

      session.AT = token.AT as string;
      session.authError = token.authError as string | undefined;

      return session;
    },
  },
  events: {
    async signOut({ session, token }) {
      await deleteCookie("sessionToken"); // Delete the session token cookie on sign out
    },
  },
};
