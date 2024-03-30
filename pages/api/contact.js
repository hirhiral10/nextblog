import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = JSON.parse(req.body);
    if (!email || !name || !message) {
      res.status(422).json({ message: "invalid data" });
      return;
    }

    try {
      const client = await MongoClient.connect(
        `mongodb+srv://${process.env.userName}:${process.env.password}@cluster0.tzx9t2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      );
      const db = client.db();
      await db.collection("messages").insertOne({ email, name, message });
      res.status(201).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default handler;
