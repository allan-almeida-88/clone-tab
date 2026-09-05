import database from "infra/database"

beforeAll(cleanDataBase)
async function cleanDataBase() {
  await database.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public');
}

test('Post to /api/v1/migrations should return 200', async function() {
  const response1 = await fetch('http://localhost:3000/api/v1/migrations', {
    method: 'POST' 
  })

  expect(response1.status).toBe(201);
  const response1Body = await response1.json()

  expect(response1Body.length).toBeGreaterThanOrEqual(0);

  const response2 = await fetch('http://localhost:3000/api/v1/migrations', {
    method: 'POST' 
  })

  expect(response2.status).toBe(201);
  const response2Body = await response2.json()

  expect(response2Body.length).toBeGreaterThanOrEqual(0);
  expect(response2Body.length).toBe(0);
})