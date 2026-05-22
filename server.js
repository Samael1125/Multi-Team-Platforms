const express = require("express");
const cors = require("cors");

const employeesRoutes = require("./routes/employees");
const teamsRoutes = require("./routes/teams");
const reportsRoutes = require("./routes/reports");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/employees", employeesRoutes);
app.use("/teams", teamsRoutes);
app.use("/reports", reportsRoutes);

app.get("/", (req, res) => {
  res.send("Team Report API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});