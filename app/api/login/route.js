import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { createToken } from '@/lib/auth';
import bcrypt from 'bcrypt';


export async function POST(req) {
  
  const { username, password } = await req.json();
  const db = await getDatabase();
  const user = await db.collection('users').findOne({ username });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!user || !isMatch) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = createToken(user);
  const response = NextResponse.json({ success: true });
  response.cookies.set('token', token, { httpOnly: true });
  
  return response;
}