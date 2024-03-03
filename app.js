const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})

require('./db/connect');
app.use(express.json());


app.use(require('./router/auth'))

const PORT=process.env.PORT;
// const user=require('./model/userSchema')

const middleware = (req, res, next) => {
    console.log("hello");
    next();
};

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/about", middleware, (req, res) => {
    res.send("hello about");
});

app.get("/contact", (req, res) => {
    res.send("hello Contact");
});

app.get("/signin", (req, res) => {
    res.send("hello signin");
});

app.get("/signup", (req, res) => {
    res.send("hello Registration");
});

app.listen(PORT, (err) => {
    console.log(`hello conection ${PORT}`);
});
