import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, name, description, url, techniques } = body;

    if (!name || !description || !url || !Array.isArray(techniques)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('projects');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          description,
          url,
          techniques,
        },
      }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}