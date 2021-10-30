const express = require("express");
const routes = express.Router();

const CategoryController = require("../controllers/categoryController");

routes.get("/", CategoryController.handle);
// router.get("/:id", category.getById);
// router.post("/", category.post);
// router.put("/:id", category.put);
// router.delete("/:id", category.delete);

module.exports = routes;
