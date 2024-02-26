
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateExam() {
    const { examId } = useParams();
    const handleSubmit = async (e) => {
        const body = {

        }
        e.preventDefault();
        const formData = new FormData(e.target);
        for (let [name, value] of formData) {
            console.log(`${name} = ${value}`);
            body[name] = value;
        }

        const res = await fetch(`https://fmda-api.vercel.app/api/exams/${examId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const response = await res.json();
        if (response.error) {
            alert(response.error);
        }
        else {
            window.location.replace("/admin")
        }
    }
    const [loading, setLoading] = useState(false);
    const [exam, setExam] = useState({
        "patientId": "",
        "age": undefined,
        "sex": undefined,
        "zipCode": "",
        "bmi": undefined,
        "examId": "",
        "keyFindings": "",
        "brixiaScores": "",
        "imageURL": ""
    });
    useEffect(async () => {
        setLoading(true);
        if (examId) {
            const res = await fetch(`https://fmda-api.vercel.app/api/exams/${examId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            setExam(data.exam);
            console.log(data.exam)
        }

        setLoading(false);

    }, [])
    return <div class="container">

        {loading ? "Loading please wait..." : <form class="row" onSubmit={handleSubmit}>
            <div class="col-md-6 col-12">
                <h4>Patient Info</h4>
                <div class="form-group mb-3">
                    <label for="patientId">Patient ID</label>
                    <input defaultValue={exam.patientId} required type="text" name="patientId" class="form-control" placeholder="Patient Id"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="age">Age</label>
                    <input defaultValue={exam.age} required type="number" name="age" class="form-control" placeholder="Age"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="sex">Sex</label>
                    <input defaultValue={exam.sex} required type="text" name="sex" class="form-control" placeholder="Sex"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="bmi">BMI</label>
                    <input defaultValue={exam.bmi} required type="text" name="bmi" class="form-control" placeholder="BMI"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="bmi">Zip Code</label>
                    <input defaultValue={exam.zipCode} required type="text" name="zipCode" class="form-control" placeholder="Zip Code"></input>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <h4>Exam Info</h4>
                <div class="form-group mb-3">
                    <label for="examId">Exam ID</label>
                    <input defaultValue={exam.examId} required type="text" name="examId" class="form-control" placeholder="Exam ID"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="imageUrl">Image URL</label>
                    <input defaultValue={exam.imageURL} required type="text" name="imageURL" class="form-control" placeholder="Image URL"></input>
                </div>
                <div class="mb-3">
                    <label for="keyFindings" class="form-label">Key Findings</label>
                    <textarea defaultValue={exam.keyFindings} required name="keyFindings" class="form-control" rows="3" placeholder="Key Findings"></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="brixiaScores">Brixia Scores</label>
                    <input defaultValue={exam.brixiaScores} required type="text" name="brixiaScores" class="form-control" placeholder="Brixia Scores"></input>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Update</button>
        </form>}
    </div>
}

export default UpdateExam;
