const Pool = require('pg').Pool;

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DATABASE_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const pool = new Pool({
  user: DB_USER,
  host: 'localhost',
  database: DB_NAME,
  password: DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
