// netlify/functions/get-all-events.js

import { connectToDatabase } from './client'; // Importa a função de conexão
import { MongoClient } from 'mongodb';

export const handler = async (event, context) => {
  try {
    const db = await connectToDatabase(); // Conecta ao banco de dados
    const collection = db.collection("events");
    const events = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(events)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Falha ao buscar eventos' })
    };
  }
};
