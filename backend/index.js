require('dotenv').config();

const express = require("express");
const cors = require("cors");
const postgre = require("./database/postgre");

const app = express();

const PORT = process.env.PORT;

app.use(cors);
app.use(express.json());

const start = async () => {
    try {
        await postgre.authenticate();
        await postgre.sync();
        app.listen(PORT, ()=> {
            console.log("Server is running on port: " + PORT);
        });
    } catch (e) {
        console.log(e);
    }
}

start();