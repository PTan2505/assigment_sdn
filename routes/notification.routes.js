const express = require("express");
const router = express.Router();
const controller = require("../controllers/notification.controller");

router.get("/:id", controller.getByStudentId);

module.exports = router;
