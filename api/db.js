const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const databaseName = process.env.MONGO_DATABASE;

const url = process.env.MONGO_URL;
const connect = async() =>{
    try{
        await mongoose.connect(MONGO_URL);


    
    console.log('Succesful MongoDB Atlass connection!');
    }
    catch(someError){
        console.log('Error. Could not connect to MongoDB Atlas.');

    }
    throw someError;
};
module.exports ={connect};
