import { getDatabase } from "./mongodb";


export async function getIntroduction() {
    const db = await getDatabase();
    return db.collection("introduction").findOne({});
}