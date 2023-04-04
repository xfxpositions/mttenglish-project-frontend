import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, id } = req.body;

    // Upload the file to a directory here
    // ...

    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();

    const result = await db.collection("students").insertOne({
      name,
      id,
      // Store the file path in MongoDB here
      // ...
    });

    res.status(201).json({ message: "Student created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating student" });
  }
}
