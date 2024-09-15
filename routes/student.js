const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

// GET students with hostel and faculty info
router.get("/getall", studentController.get);

module.exports = router;
