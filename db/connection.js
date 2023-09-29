const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "127.0.0.1",

  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});

db.on("error", (err) => {
  console.log("- STATS Mysql2 connection died", err);
});

module.exports = db;
