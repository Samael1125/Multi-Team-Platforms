const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/team-members", async (req, res) => {
  const result = await db.query(`
    SELECT e.name, t.team_name
    FROM employee_teams et
    JOIN employees e ON et.employee_id = e.id
    JOIN teams t ON et.team_id = t.id
  `);

  res.json(result.rows);
});

module.exports = router;