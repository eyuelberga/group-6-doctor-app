const dotenv =require("dotenv");
dotenv.config();
const mongo =require("mongoose");

const db= process.env.MONGODB_URL;

if(!db){
    console.error("Could not find mongodb url in environment. Please make sure to add 'MONGODB_URL' to your .env file.");
    process.exit(1);
}

const connectDB=async() =>{
    try{
        await mongo.connect(db);
        console.log("****Successfully connected to MongoDB database!");
        
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports=connectDB;