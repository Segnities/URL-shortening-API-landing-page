const express = require('express');

const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/signup", UserController.createUser);
router.post("/find", UserController.getUser);
router.post("/auth", UserController.auth);
router.get("/all-users", UserController.getAllUsers);

module.exports = router;