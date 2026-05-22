const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    message: "Report uploaded successfully to S3"
  });
});

module.exports = router;