import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  database: "kalvikudam",
  user: "root",
  password: "root@123",
});
