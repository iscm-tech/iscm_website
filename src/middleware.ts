import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/move-system") {
    return NextResponse.redirect(new URL("/move-system/index.html", request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    // - … the ones starting with `/admins`
    "/((?!api|_next|_vercel|admins|public-space-living-lab|move-system/|.*\\..*).*)",
  ],
};
