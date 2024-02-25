import React from 'react';
import './ExamViewer.css';
import { useParams } from 'react-router-dom';



const ExamViewer2 = () => {
  // Access the examId parameter from the URL
  // {console.log(match._id)}
  // const { examId } = match._id;
  const { examId } = useParams();
  console.log(examId);


  // Fetch detailed information about the selected exam using examId
  // You can use this iformation to render the details on this page

  return (
    <div>
      <h2>Exam Details for Exam ID: {examId}</h2>
      {/* Display other details or components related to exam details */}
    </div>
  );
};

export default ExamViewer2;