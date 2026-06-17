const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const formRoutes = require("./routes/formRoutes");
app.use("/api/forms", formRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const submissionRoutes =
  require("./routes/submissionRoutes");

app.use(
  "/api/submissions",
  submissionRoutes
);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mongoose = require("mongoose");

setTimeout(() => {
  console.log("DB State:", mongoose.connection.readyState);
}, 3000);