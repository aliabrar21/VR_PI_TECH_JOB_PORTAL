require('dotenv').config();
const { Client } = require('pg');

async function createDb() {
  const client = new Client({
    host: '127.0.0.1',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 5432,
    database: 'postgres' // Connect to default DB to create the new one
  });

  try {
    await client.connect();
    const dbName = process.env.DB_NAME || 'vrpi_db';
    const res = await client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${dbName}'`);
    if (res.rowCount === 0) {
      console.log(`Database ${dbName} not found, creating it...`);
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database ${dbName} created successfully.`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }
  } catch (err) {
    console.error('Error creating database:', err.stack);
  } finally {
    await client.end();
  }
}

createDb();
