require('dotenv').config();

const express = require("express");
const cors = require("cors");
const db = require("./database/postgre");

const app = express();
const mainRouter = require("./routes/mainRouter");

const PORT = process.env.PORT;

app.use(cors);
app.use(express.json());

app.use("/api", mainRouter);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, ()=> {
            console.log("Server is running on port: " + PORT);
        });
    } catch (e) {
        console.log(e);
    }
}

start();