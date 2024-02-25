import './App.css';
import { useEffect, useState } from "react";
import JsonTable from './JsonTable';

// import Admin from './Admin';
// import { Routes, Route } from 'react-router-dom';

// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams (SUPPLIED DATA)

import { useApi } from './hooks/use-api';

function Exams() {
  const { response } = useApi();
  const [jsonData, setJsonData] = useState(null)


  useEffect(()=>{
    fetch('https://fmda-api.vercel.app/api/exams')
        .then(res => {
           return res.json();
        })
        .then(data =>{
            // make an array based off the data
            console.log(data);
            const array = Object.entries(data);
            console.log(array[1][1]);
            const filteredData = array[1][1].filter(obj => obj !== null && obj !== undefined);
            console.log(filteredData);
            console.log(filteredData[1]);

            setJsonData(filteredData);
            // console.log(jsonData[0]);

        })
    // Can use to access state
    // When click exam id -> routes to a page with exam viewer
    // Grab the exam -> give to ExamViewer
  }, []); 

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      
      <JsonTable jsonData={jsonData} />
      
     
    </div>
  );
}

export default Exams;
