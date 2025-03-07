import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Validar si el token es válido o ha expirado
  if (token && isProtectedRoute) {
    const isValid = verifyToken(token);

    if (!isValid) {
      const response = NextResponse.redirect(new URL("/auth", req.url));
      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
