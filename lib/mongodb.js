import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let clientPromise = client.connect();

export async function getDatabase() {
  const dbClient = await clientPromise;
  return dbClient.db();
}