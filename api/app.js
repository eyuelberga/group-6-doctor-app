const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const port = 5000;
const connectDB = require('./db');//importing mongodb atlas connecter
const examRouter = require('./routes/exam');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express()



connectDB();//connects to techdive database

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use("/api/exams", examRouter);//exam router
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: err.message })
})

app.use(express.static('public'))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


//port
app.listen(port, () => {
    console.log(`****Server is running on port: ${port}`);
});

module.exports = app;
