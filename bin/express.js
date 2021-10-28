const express = require("express");
const bodyParser = require("body-parser");
const variables = require("./configs/variables");

const app = express();
const categoryRouter = require("../routes/categoryRoute");
const port = variables.Api.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

app.use("/api/category", categoryRouter);

module.exports = { app, port };
