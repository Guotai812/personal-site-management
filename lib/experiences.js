import { getDatabase } from "./mongodb";
import { ObjectId } from 'mongodb';

export async function getExperiences() {
    const db = await getDatabase();
    return db
        .collection("experiences")
        .find({})
        .sort({ current: -1, startTime: -1 })
        .toArray();
}

export async function getExp(id) {
    const db = await getDatabase();
    return db
        .collection("experiences")
        .findOne({ _id: new ObjectId(id) });
}