const express = require('express');

const router = express.Router();

router.post("/create", ()=> {
    console.log('Create new shrt link');
});

router.get("/", ()=> {
    console.log("Get all links");
});

module.exports = router;