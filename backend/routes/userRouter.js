const express = require('express');

const router = express.Router();

router.post("/login", ()=> {
    console.log('Login')
});

router.get("/auth", ()=> {
    console.log("Auth")
});

module.exports = router;