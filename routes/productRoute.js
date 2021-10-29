"use strict";

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

let product = new productController();

router.get("/", product.get);
router.get("/:id", product.getById);
router.post("/", product.post);
router.put("/:id", product.put);
router.delete("/:id", product.delete);

module.exports = router;
