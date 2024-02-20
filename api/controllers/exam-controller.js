const examDetail = async (req, res) => {
  return res.status(200).json({
    success: true,
    exam:
    {
      "_id": "61e83d679dc59e6e8e11a1cd",
      "patientId": "COVID-19-AR-16406504",
      "age": 39,
      "sex": "M",
      "zipCode": "722",
      "bmi": 33.5,
      "__v": 0,
      "examId": req.params.examId,
      "keyFindings": "lungs appear clear with no nodule, airspace  consolidation or pleural effusion",
      "brixiaScores": "1,2,3,4",
      "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_PORTABLE_2.png"
    }
  });
}

module.exports = {
  examDetail,
};
