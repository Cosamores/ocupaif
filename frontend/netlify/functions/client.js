const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToDatabase = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db("ocupaif");
};

export { connectToDatabase };
