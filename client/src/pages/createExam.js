import './App.css';
import fakeData from "./MOCK_DATA.json";
import { useState } from "react";

import { useApi } from './hooks/use-api';

function createExam() {
    const [createExam, setExamList] = useState([]);
    const [newExam, setNewExam] = useState("");

    const handleChange = (event) => {
        setNewExam(event.target.value);
    };

    

    returh (
        <div className='createExam'>
            <div className='addExam'>
                <button>addExam</button>
                <button>Cancel</button>
            </div>
            <div className='patientInfo'>
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
            </div>
            <div className='examInfo'>
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
                <input onChange={handleChange} type="text" />
            </div>
        </div>
    );
}

export default createExam;