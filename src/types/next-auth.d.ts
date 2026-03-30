import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    AT?: string;
    authError?: string;
    user: {
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    AT?: string;
    authError?: string;
    email?: string;
  }
}
