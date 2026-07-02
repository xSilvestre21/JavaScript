const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://gustavosilvestre:gustavo123@cursojs.x7jfsty.mongodb.net/?appName=CursoJS";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Conectado!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
