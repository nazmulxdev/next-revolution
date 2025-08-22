import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const token = await getToken({ req });
  const isTokenOk = Boolean(token);
  const protectedPath = req.nextUrl.pathname.startsWith("/add-product");
  if (protectedPath && !isTokenOk) {
    const callBackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(
        `/api/auth/signin?callbackUrl=${callBackUrl}`,
        req.nextUrl.origin,
      ),
    );
  }
  return NextResponse.next();
}
