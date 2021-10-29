const express = require("express");
const router = express.Router();
const other = require("../controllers/otherController");

router.get("/", other.get);
router.get("/:id", other.getById);
router.post("/", other.post);
router.put("/:id", other.put);
router.delete("/:id", other.delete);

module.exports = router;
