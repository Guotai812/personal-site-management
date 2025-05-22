import { getDatabase } from '@/lib/mongodb';
import bcrypt from 'bcrypt';


export async function POST(req) {
  const { username, password } = await req.json();
  const db = await getDatabase();
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.collection("users").insertOne({
    username,
    password: hashedPassword,
  })

  return new Response('User created', { status: 201 });
}