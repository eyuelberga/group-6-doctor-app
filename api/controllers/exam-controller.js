const ExamSchema = require("../models/examModel");
const examDetail = async (req, res) => {
  const exams = await ExamSchema.find({ examId: req.params.examId })
  if (exams.length < 1) return res.status(404).json({ success: false, message: "Exam not found!" });
  return res.status(200).json({
    success: true,
    exam: exams[0]
  });
};

const allExams = async (req, res) => {
  const exams = await ExamSchema.find()
  return res.status(200).json({
    success: true,
    exams
  });
};


const deleteExam = async (req, res) => {
  let exams = await ExamSchema.find({ examId: req.params.examId })
  if (exams.length < 1) return res.status(404).json({ success: false, message: "Exam not found!" });
 exams = await ExamSchema.deleteOne({ examId: req.params.examId })
  return res.status(200).json({
    success: true,
    exam: exams[0]
  });
};

const updateExam = async (req, res) => {
  let exams = await ExamSchema.find({ examId: req.params.examId })
  if (exams.length < 1) return res.status(404).json({ success: false, message: "Exam not found!" });

  await ExamSchema
  .findOneAndUpdate({examId: req.params.examId},req.body)
  .then((result) =>
  {
      res.json
      ({
          exam: result,
          message: "Exam successfully updated!",
          status:200,
      });
  })
.catch((err) => {
  return next(err);
});
};

module.exports = {
  examDetail,
  allExams,
  deleteExam,
  updateExam

};
