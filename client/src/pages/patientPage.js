import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonTable from "../JsonTable"

function PatientPage() {
    const { patientId } = useParams();
    const [loading, setLoading] = useState(false);
    const [patient, setPatient] = useState({
        "patientId": "",
        "age": undefined,
        "sex": undefined,
        "zipCode": "",
        "bmi": undefined,
    });

    useEffect(async () => {
        setLoading(false);
        if (patientId) {
            const res = await fetch(`api/patient/${patientId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            const exams = data.exams;
            setPatient(exams[0]);
        }

        setLoading(false);

    }, [])

    const [jsonData, setJsonData] = useState(null)

    useEffect(()=>{
        fetch(`https://fmda-api.vercel.app/api/patient/${patientId}`)
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

    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ });
    return (
        <div>
            <JsonTable jsonData={jsonData} />

        
        </div>
    )


    
}

export default PatientPage;