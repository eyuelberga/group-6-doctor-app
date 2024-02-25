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
      .then( res=>{
        return res.json();
      })
      .then(data =>{
        console.log(data);
        const array = Object.entries(data);
        console.log(array[1][1]);
        setExam(array[1][1]);
        setLoading(false)
      })

  },[]);

  if(loading){
    return <p>Loading...</p>; // Display a loading message or spinner while data is being fetched
  }
  

  return (
    <div>
      <h2>Exam Details</h2>
      <p> ID: {exam.examId}</p>
      <p> Patient ID: {exam.patientId}</p>
      <p> Age: {exam.age}</p>
      <p> Sex: {exam.sex}</p>
      <p>zip: {exam.zipCode}</p>
      <p>BMI: {exam.bmi}</p>
      <p> _v: {exam.__v}</p>
      <p>Exam ID: {exam.examId}</p>
      <p>keyFindings: {exam.keyFindings}</p>
      <p>brixiaScores: {exam.brixiaScores}</p>
      <img
          src={exam.imageURL}
          alt={`Image Not Found`}
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />

    </div>
  );
};

export default ExamViewer;