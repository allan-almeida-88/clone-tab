import { Client } from 'pg';

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

async function query(queryObject) {
  try {
    await client.connect();
    const result = await client.query(queryObject);
    client.end()

    return result;
  } catch(erro) {
    console.log(erro)
  }
}

export default {
  query: query
}