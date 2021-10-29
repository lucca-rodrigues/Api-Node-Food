const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const variables = require("./configs/variables");

const app = express();
const categoryRouter = require("../routes/categoryRoute");
const productRouter = require("../routes/productRoute");
const otherRouter = require("../routes/otherRoute");
const classRouter = require("../routes/classRoute");

const port = variables.Api.port;
const connection = variables.Database.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to database
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/other", otherRouter);
app.use("/api/class", classRouter);

module.exports = { app, port };
