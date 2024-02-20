const ExamSchema = require("../models/examModel");
const examDetail = async (req, res) => {
  const exams = await ExamSchema.find({ examId: req.params.examId })
  if (exams.length < 1) return res.status(404).json({ success: false, message: "Exam not found!" });
  return res.status(200).json({
    success: true,
    exam: exams[0]
  });
};

module.exports = {
  examDetail,
};
