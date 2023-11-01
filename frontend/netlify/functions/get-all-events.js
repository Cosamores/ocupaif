// get-all-events
import { MongoClient } from 'mongodb';
import { connectToDatabase } from './client';

exports.handler = async (event, context) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = connectToDatabase().ent.db("ocupaif").collection("events");
    const events = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(events)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching events' })
    };
  } finally {
    await client.close();
  }
};
