const { MongoClient } = require('mongodb');

const { DB_NAME } = require('../config');

const connectToMongodb = async () => {
  try {
    const url = 'mongodb://localhost:27017';

    const client = await MongoClient.connect(url);

    const db = await client.db(DB_NAME);
    console.log('Se conecto con exito a MongoDB!!');

    return db;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongodb;
