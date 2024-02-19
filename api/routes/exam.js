//exam creation endpoint
const express=require('express');
const Exam=require(/models/exam);
const router=express.Router();

//create new exam
router.post("/api/exams",async (req,res) =>{
    if(!req.body.examID || !req.body.patientID || !req.body.date || !req.body.keyFindings || !req.body.brixiaScore || !req.body.imageURL){
        return res.status(400).json({error:"examID,patientID, date, keyFindings, brixiaScore and imageURL are required."});
    }
    try{
        const newExam = new Exam 
        ({
            examID: req.body.examID,
            patientID:req.body.patientID,
            date:req.body.date,
            keyFindings:req.body.keyFindings,
            brixiaScore:req.body.brixiaScore,
            imageURL:req.body.imageURL
        });
        await newExam.save();
        res.status(201).json(newExam);
       
    }
    catch(someError){
       {
        console.error(someError);
        res.status(500).json({message: "Error creating Exam"});
       }
  
    };
});
    module.exports = router;