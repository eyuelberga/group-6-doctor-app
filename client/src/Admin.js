import './App.css';
import Navbar from './Navbar';
import Table from './Table'; 
import { useState, useEffect } from 'react';
// import Admin from './Admin';
// import { Routes, Route } from 'react-router-dom';


import { useApi } from './hooks/use-api';

function Admin() {
  const { response } = useApi();

  // Fake data to display
//   const exams = [
//     { patient_id: 1, exam_id: 1, image: 'annie-spratt-PM4Vu1B0gxk-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
//     { patient_id: 2, exam_id: 1, image: 'joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
//     { patient_id: 3, exam_id: 1, image: 'joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
//   ];

    // Fake data -> using state to handle deletions
    // TODO: Link exam id's to view specific exam
//   const[exams,setExams] = useState([
//     { patient_id: 1, exam_id: 1, image: 'annie-spratt-PM4Vu1B0gxk-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
//     { patient_id: 1, exam_id: 2, image: 'joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
//     { patient_id: 1, exam_id: 3, image: 'joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
//   ]);

  const[exams,setExams] = useState(null);

  const handleDelete= (exam_id) =>{
    const newExams = exams.filter(row => row._id !== exam_id);
    setExams(newExams);
  }

  // Function runs any time there is a re-render
  // TODO: runs 3 times at start -> unsure why

  useEffect(()=>{
    fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        .then(res => {
           return res.json();
        })
        .then(data =>{
            // make an array based off the data
            const data_array = Object.entries(data);
            if (Array.isArray(data_array)) {
                // Use map on the array
                // data_array.map(item => console.log(item));
                console.log(data_array[1][1]);
              } else {
                console.error('data_array is not an array');
              }
              let data_array2;
              data_array2 = Object.entries(data_array[1][1]);
            // console.log(data);
            setExams(data_array2);
        })
    // Can use to access state
  }, []); 

  // Dependencies: [] => Only runs at initial render
  // [Add dependency]

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      <Navbar/>
      <p>
          {response}
      </p>
      <div className="data">
        {exams && <Table data={exams} handleDelete = {handleDelete} />}
      </div>

        {/* Testing Dependencies  */}
      {/* <button onClick = {() => setName('Simm')}> Change Name</button>
      <p>{name}</p> */}
      {/* <Routes>
        <Route path = '/Admin' element = {<Admin/>}/>
      </Routes> */}
    </div>
  );
}

export default Admin;
