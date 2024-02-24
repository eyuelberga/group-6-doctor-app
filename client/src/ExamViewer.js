import React from 'react';
import './ExamViewer.css';


const ExamViewer = ({ match }) => {
  // Access the examId parameter from the URL
  {console.log(match._id)}
  const { examId } = match._id;

  // Fetch detailed information about the selected exam using examId
  // You can use this iformation to render the details on this page

  return (
    <div>
      <h2>Exam Details</h2>
      <p> ID: {match._id}</p>
      <p> Patient ID: {match.patientId}</p>
      <p> Age: {match.age}</p>
      <p> Sex: {match.sex}</p>
      <p>zip: {match.zipCode}</p>
      <p>BMI: {match.bmi}</p>
      <p> _v: {match.__v}</p>
      <p>Exam ID: {match.examId}</p>
      <p>keyFindings: {match.keyFindings}</p>
      <p>brixiaScores: {match.brixiaScores}</p>
      <img
          src={match.imageURL}
          alt={`Image Not Found`}
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />

    </div>
  );
};

export default ExamViewer;