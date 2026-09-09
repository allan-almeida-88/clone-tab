import migrationRunner from 'node-pg-migrate';
import { join } from 'path';
import database from 'infra/database.js';

export default async function (request, response) {
  const dbClient = await database.getNewClient();
  const defaultMigrationConfig = {
    dbClient: dbClient,
    dir: join('infra', 'migrations'),
    migrationsTable: 'pgmigrations',
    direction: 'up',
    verbose: true,
    dryRun: true
  }
   
  if(request.method === 'GET') {
    const pendingMigrations = await migrationRunner(defaultMigrationConfig);
    dbClient.end();
    return response.status(200).json(pendingMigrations)
  }

  if(request.method === 'POST') {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationConfig,
      dryRun: false
    });
    dbClient.end();
    return response.status(201).json(migratedMigrations)
  }
  
}