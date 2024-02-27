import React from 'react';
import './ExamViewer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";



const ExamViewer = () => {
  // Access the examId parameter from the URL
  // {console.log(exam._id)}
  const { examId } = useParams();
  const [exam, setExam] = useState(null)
  const [loading, setLoading] = useState(true);


  // Fetch detailed information about the selected exam using examId
  // You can use this iformation to render the details on this page
  useEffect(() => {
    // Fetch exam
    fetch(`https://fmda-api.vercel.app/api/exams/${examId}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        const array = Object.entries(data);
        console.log(array[1][1]);
        setExam(array[1][1]);
        setLoading(false)
      })

  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner while data is being fetched
  }


  return (
    <div className='mb-3'>

      <div className="card">
        <div className="card-header">
          Exam Details
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: <strong>{exam.examId}</strong> </li>
          <li class="list-group-item">Patient ID: <strong>{exam.patientId}</strong> </li>
          <li class="list-group-item">Age: <strong>{exam.age}</strong> </li>
          <li class="list-group-item">Sex: <strong>{exam.sex}</strong> </li>
          <li class="list-group-item">Zip Code: <strong>{exam.zipCode}</strong> </li>
          <li class="list-group-item">BMI: <strong>{exam.bmi}</strong> </li>
          <li class="list-group-item">brixiaScores: <strong>{exam.brixiaScores}</strong> </li>
          <li class="list-group-item">Key Findings: <strong>{exam.keyFindings}</strong> </li>
        </ul>
        <img src={exam.imageURL} className="card-img-bottom" style={{ height: "500px", objectFit: "contain" }} alt="Image Not Found"></img>
      </div>

    </div>
  );
};

export default ExamViewer;