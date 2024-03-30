import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://hirhiral10:ph4ZvAYdCwzUhocQ@cluster0.tzx9t2q.mongodb.net/blogs/?retryWrites=true&w=majority&appName=Cluster0",
  {
    serverApi: {
      strict: true,
      deprecationErrors: true,
    },
  }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
