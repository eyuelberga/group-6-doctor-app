const mongo =require("mongoose");
const db= "mongodb+srv://kgonz:<password>@techdive.u831ass.mongodb.net/?retryWrites=true&w=majority";

const connectDB=async() =>{
    try{
        await mongo.connect(db);
        console.log("****Succesfully connected to MongoDB database!");
        
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports=connectDB;