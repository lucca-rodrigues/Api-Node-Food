"use strict";

const express = require("express");
const router = express.Router();
const { ClassController } = require("../controllers/classController");

const classController = new ClassController();

router.get("/", classController.handle);
// router.get("/:id", class.getById);
// router.post("/", class.post);
// router.put("/:id", class.put);
// router.delete("/:id", class.delete);

module.exports = router;
