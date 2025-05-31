import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get tokens from cookies
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const userRoles = request.cookies.get("userRoles")?.value;

  // Define route patterns
  const authRoutes = ["/auth/login", "/auth/sign-up", "/auth/forgot-password"];

  const dashboardRoutes = [
    "/opinion",
    "/list",
    "/hero",
    "/entrepreneur",
    "/categories",
    "/careers",
    "/authors",
    "/poll",
    "/sub-categories",
  ];

  const currentPath = request.nextUrl.pathname;

  // If no tokens, redirect to login for protected routes
  if (!accessToken || !refreshToken) {
    // Allow access to common layout and auth routes
    if (authRoutes.some((route) => currentPath.includes(route))) {
      return NextResponse.next();
    }

    // Redirect to login for other routes
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Prevent authenticated users from accessing auth routes
  if (accessToken && authRoutes.some((route) => currentPath.includes(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Check dashboard route access for Super Admin/Internal roles
  if (dashboardRoutes.some((route) => currentPath.includes(route))) {
    const roles = userRoles ? JSON.parse(userRoles) : [];
    const isSuperAdminOrInternal = roles.some((role: string) =>
      ["Super Admin", "Internal"].includes(role)
    );

    if (!isSuperAdminOrInternal) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Auth routes
    "/auth/:path*",

    // Dashboard routes
    "/opinion/:path*",
    "/list/:path*",
    "/hero/:path*",
    "/entrepreneur/:path*",
    "/categories/:path*",
    "/careers/:path*",
    "/authors/:path*",
    "/poll/:path*",
    "/sub-categories/:path*",
  ],
};
