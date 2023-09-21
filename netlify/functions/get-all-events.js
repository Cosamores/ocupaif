const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI; // Set this in your Netlify environment variables

exports.handler = async (event, context) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db("ocupaif").collection("events");
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
