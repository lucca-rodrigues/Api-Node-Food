const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const variables = require("./configs/variables");
const productRoute = require("../routes/productRoute");
const categoryRoute = require("../routes/categoryRoute");

const app = express();

const port = variables.Api.port;
const connection = variables.Database.connection;

app.use(express.json());
app.use(cors());

// Connection to database
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (res) => {
  res.status(200).send("Welcome to the API-Food");
});

app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

module.exports = { app, port };
