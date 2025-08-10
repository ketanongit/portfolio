import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Allow login page without redirect
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const isLoggedIn =
    request.cookies.get("admin_auth")?.value === process.env.ADMIN_PASSWORD;

  if (pathname.startsWith("/admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
