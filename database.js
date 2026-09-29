const Database = require("better-sqlite3");

const db = new Database("studyportal.db");

console.log("Database connected successfully!");

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`).run();

console.log("Users table created!");

module.exports = db;