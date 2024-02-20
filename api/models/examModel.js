const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    examId:{
        type:String,
        required: true,
        unique:true
    },
    patientId:{
        type:String,
        required: true,
        unique:true

    },
    date:{
        type:Date,
        required:false,
        unique:false
    },
    keyFindings:{
        type:String,
        required:true,
        unique:false
    },
    brixiaScores:{
        type: String,
        required:true,
        unique:false
    },
    imageURL:{
        type:String,
        required:true,
        unique:false,
    },
    age:{
        type:Number,
        required: true,
        unique:false

    },
    sex:{
        type:String,
        required:true,
        unique:false

    },
    bmi:{
        type:Number,
        required:true,
        unique:false

    },
    zipCode:{
        type:String,
        required:false,
        unique:false

    }

});
module.exports=mongoose.model('Exam',examSchema);
