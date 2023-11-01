const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let isConnected;

const connectToDatabase = async () => {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client;
};

