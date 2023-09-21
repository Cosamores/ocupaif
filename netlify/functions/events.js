const Event = require('../../server/models/Event');

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    try {
      const events = await Event.find();
      return {
        statusCode: 200,
        body: JSON.stringify(events),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  // You can handle other HTTP methods (POST, PUT, DELETE) similarly.
  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
};
