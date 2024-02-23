const ExamSchema = require("../models/examModel");

const patientDetail = async (req, res) => {
  const exams = await ExamSchema.find({ patientId: req.params.patientId })
  if (exams.length < 1) return res.status(404).json({ success: false, message: "Patient not found!" });
  return res.status(200).json({
    success: true,
    exams
  });
};


module.exports = {
  patientDetail
};
