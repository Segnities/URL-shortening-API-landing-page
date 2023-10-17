const express = require("express");
const router = express.Router();

const userRoute = require('./userRouter');
const shrtLinksRouter = require("./shrtUrlsRouter");

router.use("/user", userRoute);
router.use("/short-links", shrtLinksRouter);

module.exports = router;