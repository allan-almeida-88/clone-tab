import database from '/infra/database.js';

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionDatabaseResult   = await database.query('SHOW server_version;');
  const versionDatabaseValue    = parseFloat(versionDatabaseResult.rows[0].server_version);
  const maxConnectionResult     = await database.query('SHOW max_connections;');
  const maxConnectionValue      = parseInt(maxConnectionResult.rows[0].max_connections);
  const connectionActiveResult  = await database.query({
    text: 'SELECT COUNT(*) as connection_active FROM pg_stat_activity WHERE datname = $1;',
    values: [process.env.POSTGRES_DB]
  })
  const connectionActiveValue   = parseInt(connectionActiveResult.rows[0].connection_active);
  
  console.log(connectionActiveResult)
  return response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: versionDatabaseValue,
        max_connections: maxConnectionValue,
        connection_active: connectionActiveValue
      }
    }
  })
}

export default status;