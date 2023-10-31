

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  
  console.log('HTTP Method:', event.httpMethod); // Log the incoming HTTP method

  if (event.httpMethod === 'GET') {
    const eventoID = event.queryStringParameters.eventoId;

    try {
      await client.connect();
      const collection = client.db("ocupaif").collection("comments");
      const comments = await collection.find({ evento: eventoID }).sort({ data: -1 }).toArray();

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow any origin
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify(comments)
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow any origin
        },
        body: JSON.stringify({ error: 'Failed fetching comments' })
      };
    } finally {
      await client.close();
    }
  }

  if (event.httpMethod === 'POST') {
    const commentData = JSON.parse(event.body);

    // Ensure eventoId is present in the commentData
    if (!commentData.eventoId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'eventoId is missing' })
        };
    }

    try {
        await client.connect();
        const collection = client.db("ocupaif").collection("comments");
        const result = await collection.insertOne(commentData);
        return {
            statusCode: 200,
            body: JSON.stringify(result.ops[0])
        };
    } catch (error) {
        console.error('Error:', error);
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



