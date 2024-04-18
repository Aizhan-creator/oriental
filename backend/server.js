const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const uri = "mongodb+srv://adminka:Aizhan2003*@cluster0.tlqalo4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is working!');
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
