import { connectToDatabase } from './client'; // Importa a função de conexão
import { MongoClient } from 'mongodb';

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    const eventoID = event.queryStringParameters.eventoId;
    const db = await connectToDatabase();
    const collection = db.collection("comments");

    try {
      const comments = await collection.find({ eventoId: eventoID }).sort({ data: -1 }).toArray();
   
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Permita qualquer origem
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify(comments),
      };
    } catch (error) {
      console.error('Erro ao buscar comentários:', error);  // Adicionado log de erro
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: 'Falha ao buscar comentários' }),
      };
    }
  }

  if (event.httpMethod === 'POST') {
    const commentData = JSON.parse(event.body);

    if (!commentData.eventoId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'eventoId está ausente' }),
      };
    }

    const db = (await connectToDatabase()).db("ocupaif");
    const collection = db.collection("comments");

    try {
      const result = await collection.insertOne(commentData);
      return {
        statusCode: 200,
        body: JSON.stringify(result.ops[0]),
      };
    } catch (error) {
      console.error('Erro:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Falha ao postar comentário' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Método não permitido' }),
  };
};