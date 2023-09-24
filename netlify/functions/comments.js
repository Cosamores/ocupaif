const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  if (event.httpMethod === 'GET') {
    const eventoID = event.queryStringParameters.eventoId;

    try {
      await client.connect();
      const collection = client.db("ocupaif").collection("comments");
      const comments = await collection.find({ evento: eventoID }).toArray();

      return {
        statusCode: 200,
        body: JSON.stringify(comments)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed fetching comments' })
      };
    } finally {
      await client.close();
    }
  }

  if (event.httpMethod === 'POST') {
    const commentData = JSON.parse(event.body);

    try {
      await client.connect();
      const collection = client.db("ocupaif").collection("comments");
      const result = await collection.insertOne(commentData);

      return {
        statusCode: 200,
        body: JSON.stringify(result.ops[0])
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed posting comment' })
      };
    } finally {
      await client.close();
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' })
  };
};
