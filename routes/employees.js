const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM employees");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  const result = await db.query(
    "INSERT INTO employees(name,email) VALUES($1,$2) RETURNING *",
    [name, email]
  );

  res.json(result.rows[0]);
});

module.exports = router;