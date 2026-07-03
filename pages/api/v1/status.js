import database from '../../../infra/database.js';

async function status(request, response) {
  const result = await database.query('SELECT 200 as statu_code;');
  const resultQuery = await result.rows[0];
  response.status(resultQuery.statu_code).json({ text: "Teste 2" });
}

export default status;
