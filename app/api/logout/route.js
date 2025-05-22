import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/', // ensure it matches where the cookie was set
  });
  return response;
}