import migrationRunner from 'node-pg-migrate';
import { join } from 'path';

export default async function (request, response) {

  const defaultMigrationConfig = {
    databaseUrl: process.env.DATABASE_URL,
    dir: join('infra', 'migrations'),
    migrationsTable: 'pgmigrations',
    direction: 'up',
    verbose: true,
    dryRun: true
  }
   
  if(request.method === 'GET') {
    const pendingMigrations = await migrationRunner(defaultMigrationConfig);
    return response.status(200).json(pendingMigrations)
  }

  if(request.method === 'POST') {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationConfig,
      dryRun: false
    });
    return response.status(201).json(migratedMigrations)
  }
  
}