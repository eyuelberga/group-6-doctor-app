const express = require("express");
const router = express.Router();

const PatientController = require('../controllers/patient-controller');

router.get('/:patientId', PatientController.patientDetail);

module.exports = router;


