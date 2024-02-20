const express = require('express');
const router = express.Router();

const ExamController = require('../controllers/exam-controller');

router.get('/:examId', ExamController.examDetail);

module.exports = router;
