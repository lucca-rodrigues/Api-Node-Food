"use strict";

const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

let category = new categoryController();

router.get("/", category.get);
router.get("/:id", category.getById);
router.post("/", category.post);
router.put("/:id", category.put);
router.delete("/:id", category.delete);

module.exports = router;
