exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const providedPassword = JSON.parse(event.body).password;

  if (providedPassword === process.env.ADMIN_PASSWORD) {
    return {
      statusCode: 200,
      body: JSON.stringify({ authenticated: true })
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ authenticated: false, error: 'Invalid password' })
    };
  }
};
