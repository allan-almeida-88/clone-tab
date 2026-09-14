import migrationRunner from "node-pg-migrate";
import { join } from "path";
import database from "infra/database.js";

export default async function (request, response) {
  const methodsPermitidos = ["GET", "POST"];

  if (!methodsPermitidos.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed`,
    });
  }

  const dbClient = await database.getNewClient();
  try {
    const defaultMigrationConfig = {
      dbClient: dbClient,
      dir: join("infra", "migrations"),
      migrationsTable: "pgmigrations",
      direction: "up",
      verbose: true,
      dryRun: true,
    };

    if (request.method === "GET") {
      const pendingMigrations = await migrationRunner(defaultMigrationConfig);
      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrationRunner({
        ...defaultMigrationConfig,
        dryRun: false,
      });
      return response.status(201).json(migratedMigrations);
    }
  } catch (error) {
    console.log(error);
  } finally {
    dbClient.end();
  }
}
