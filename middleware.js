import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_PATHS = ['/login'];

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  if (PUBLIC_PATHS.includes(pathname)) {
    // If user is already logged in, redirect them to dashboard
    if (token) {
      try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch {
        // Token is invalid or expired — allow to proceed to login
        return NextResponse.next();
      }
    }
    return NextResponse.next(); // No token — allow to proceed to login
  }

  // For protected paths like /dashboard
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'], // <- include /login explicitly
};