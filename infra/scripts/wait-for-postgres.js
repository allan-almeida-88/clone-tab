const { exec } = require('node:child_process');

function checkPostgres() {
  exec('docker exec clone_db pg_isready --host localhost', handleReturn)

  function handleReturn(error, stdout, stderr) {
    if(stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }
    console.log("\n Postgres ready\n")
  }
}

process.stdout.write("\n\n Aguardando Postgres \n\n")
checkPostgres();