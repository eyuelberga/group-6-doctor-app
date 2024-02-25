import React from 'react';
import JsonTable from './JsonTable';
import { useEffect, useState } from "react";
// import { Link, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Admin = () => {
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
    <div>
      <JsonTable jsonData={jsonData} />
    </div>
  );
};

export default Admin;