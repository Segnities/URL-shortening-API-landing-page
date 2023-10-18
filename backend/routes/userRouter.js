const express = require('express');

const router = express.Router();

router.post("/signup", ()=> {
    console.log('Login')
});

router.post("/login", ()=> {

});
router.get("/auth", ()=> {
    console.log("Auth")
});

module.exports = router;