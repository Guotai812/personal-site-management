
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET = process.env.JWT_SECRET;

export function createToken(user) {
  return jwt.sign({ username: user.username }, SECRET, { expiresIn: '1h' });
}

export async function verifyToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}