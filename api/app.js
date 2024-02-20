const express = require('express');
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors = require('cors');
const port =5000;
const connectDB = require('./db');//importing mongodb atlas connecter
const examModel = require("./models/examModel");

const app =express()



connectDB();//connects to techdive database

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    }),
);
app.use("/api/exams",examModel);



//port
app.listen(port,()=>{
    console.log(`****Server is running on port: ${port}`);
});

module.exports = app;
