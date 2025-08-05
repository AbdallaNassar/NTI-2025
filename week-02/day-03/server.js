const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./userRoutes");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error", err));

app.listen(port, "127.0.0.1", () => {
  console.log("Server running ");
});
