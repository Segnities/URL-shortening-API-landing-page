const express = require('express');
const router = express.Router();

const ShrtUrlsController = require("../controllers/shrtUrlsController");

router.post("/create", ShrtUrlsController.create);
router.post("/", ShrtUrlsController.fetchAllByUserId);

module.exports = router;