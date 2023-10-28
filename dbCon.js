import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root@123",
  database: process.env.DB_DBNAME || "kalvikudam",
});
