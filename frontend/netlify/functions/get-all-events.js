import { connectToDatabase } from './client';

exports.handler = async (event, context) => {

  const db = await connectToDatabase();

  try {
    const collection = db.collection("events");
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
  }
};
