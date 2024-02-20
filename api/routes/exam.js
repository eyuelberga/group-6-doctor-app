let mongoose = require("mongoose"),
    express = require("express");
    router = express.Router();

//exam model
const ExamSchema=require("./models/examModel");

//create new exam
router.route("/api/exams").post(async (req,res,next) =>
{
    await ExamSchema
        .create(req.body)
        .then((result) =>
        {
            res.json
            ({
                data: result,
                message: "Exam succesfully created!",
                status:200,
            });
        })
    .catch((err) => {
        return next(err);
    });
});
           

    module.exports = router;