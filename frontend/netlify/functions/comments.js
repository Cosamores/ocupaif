// netlify/functions/comments.js

import { connectToDatabase } from './client';

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const db = await connectToDatabase();
  const collection = db.collection("comments");

  if (event.httpMethod === "GET") {
    const eventoID = event.queryStringParameters.eventoId;

    try {
      const comments = await collection
        .find({ eventoId: eventoID })
        .sort({ data: -1 })
        .toArray();

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(comments),
      };
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Falha ao buscar comentários" }),
      };
    }
  }

  if (event.httpMethod === "POST") {
    const commentData = JSON.parse(event.body);
    console.log('Comment data: ' + commentData)
    if (!commentData.eventoId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "eventoId está ausente" }),
      };
    }


    try {
      const result = await collection.insertOne(commentData);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result.ops[0]),
      };
    } catch (error) {
      console.error("Erro:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Falha ao postar comentário" }),
      };
    }
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: "Método não permitido" }),
  };
};
