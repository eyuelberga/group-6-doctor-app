const mongoose = require('mongoose');
mongoose.connect('',{});
require('dotenv').config();

const url = process.env.mongoAtlasUrl;

const connect = async() =>{
    try{
        await mongoose.connect(url);


    
    console.log('Succesful MongoDB Atlass connection!');
    }
    catch(someError){
        console.someError('Error. Could not connect to MongoDB Atlas.',someError.message);

    }
};
module.exports ={connect};
