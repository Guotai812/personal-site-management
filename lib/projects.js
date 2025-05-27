import { ObjectId } from "mongodb";
import { getDatabase } from "./mongodb";

  export async function getProjects() {
    const db = await getDatabase();
    return db
            .collection("projects")
            .find({})
            .sort({name: -1})
            .toArray();
  }

  export async function getProject(id) {
    const db = await getDatabase();
    return db
            .collection("projects")
            .findOne({_id: new ObjectId(id)})
  }