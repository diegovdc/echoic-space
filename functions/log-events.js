const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "Analytics";
const collectionName = "Events";

const handler = async (event) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const body = JSON.parse(event.body);
    const result = await collection.insertOne(body);
    return {
      statusCode: 201,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  } finally {
    await client.close();
  }
};

exports.handler = handler;

// handler({
//   body: JSON.stringify({
//     path: "test-path",
//     sessionId: "123",
//     timestamp: Date.now(),
//   }),
// }).then(console.log);
