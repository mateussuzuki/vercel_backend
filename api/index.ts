import pool from "./database-connection";

require("dotenv").config();

const express = require("express");
const app = express();

module.exports = app;
app.get("/api", async function (req:any, res:any) {
  try {
    const result = await pool.query("SELECT id, username, email FROM users");
    const users = result.rows;
    return res.json(users);
  } catch (err) {
    res.json(err);
  }
});
function next(err: any) {
	throw new Error("Function not implemented.");
}

