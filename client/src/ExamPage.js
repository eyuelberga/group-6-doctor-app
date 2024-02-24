import React from 'react';
import JsonTable from './JsonTable';
import { useEffect, useState } from "react";


const ExamPage = () => {
  const [jsonData, setJsonData] = useState(null)
  
  useEffect(()=>{
    fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
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

            setJsonData(filteredData);
        })
    // Can use to access state
  }, []); 

  return (
    <div>
      <h1>JSON Table Example</h1>
      <JsonTable jsonData={jsonData} />
    </div>
  );
};

export default ExamPage;