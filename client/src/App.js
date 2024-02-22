import './App.css';

import Navbar from './Navbar';
import Table from './Table'; 
// import Admin from './Admin';
// import { Routes, Route } from 'react-router-dom';
// import fakeData from "./MOCK_DATA.json";
import { useTable } from "react-table";

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  // Fake data to display
  const data = [
    { patient_id: 1, exam_id: 1, image: 'annie-spratt-PM4Vu1B0gxk-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
    { patient_id: 2, exam_id: 1, image: 'joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
    { patient_id: 3, exam_id: 1, image: 'joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg', findings: "No significant findings", brixia_score: 1, age: 25, sex:"M", BMI:85 ,zip: 1, },
  ];

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      <Navbar/>
      <p>
          {response}
      </p>
      <div className="data">
        <Table data={data} />
      </div>
      {/* <Routes>
        <Route path = '/Admin' element = {<Admin/>}/>
      </Routes> */}
     
    </div>
  );
}

export default App;
