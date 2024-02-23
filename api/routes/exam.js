const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//exam model
const ExamSchema=require("../models/examModel");


const ExamController = require('../controllers/exam-controller');

router.get('/:examId', ExamController.examDetail);

router.get('/', ExamController.allExams);

router.delete('/:examId', ExamController.deleteExam);

//create new exam
router.route("/").post(async (req,res,next) =>
{
    
        await ExamSchema
        .create(req.body)
        .then((result) =>
        {
            res.json
            ({
                exam: result,
                message: "Exam successfully created!",
                status:200,
            });
        })
    .catch((err) => {
        return next(err);
    });
});
    module.exports = router;


