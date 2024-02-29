import React, { useEffect, useState } from "react";

function createExam() {

    const handleSubmit = async(e) => {
        const body = {

        }
        e.preventDefault();
        const formData = new FormData(e.target);
        for(let [name, value] of formData) {
        // console.log(`${name} = ${value}`);
        body[name]=value; 
        }
        console.log(body);

        await fetch(`https://fmda-api.vercel.app/api/exams`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
          })
          window.location.replace("/admin")
    }
    

    return <div class="container">

       <form class="row" onSubmit={handleSubmit}>
            <div class="col-md-6 col-12">
                <h4>Patient Info</h4>
                <div class="form-group mb-3">
                    <label for="patientId">Patient ID</label>
                    <input required type="text" name="patientId" class="form-control" placeholder="Patient Id"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="age">Age</label>
                    <input required type="number" name="age" class="form-control" placeholder="Age"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="sex">Sex</label>
                    <input required type="text" name="sex" class="form-control" placeholder="Sex"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="bmi">BMI</label>
                    <input required type="text" name="bmi" class="form-control" placeholder="BMI"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="bmi">Zip Code</label>
                    <input required type="text" name="zipCode" class="form-control" placeholder="Zip Code"></input>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <h4>Exam Info</h4>
                <div class="form-group mb-3">
                    <label for="examId">Exam ID</label>
                    <input required type="text" name="examId" class="form-control" placeholder="Exam ID"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="imageUrl">Image URL</label>
                    <input required type="text" name="imageURL" class="form-control" placeholder="Image URL"></input>
                </div>
                <div class="mb-3">
                    <label for="keyFindings" class="form-label">Key Findings</label>
                    <textarea required name="keyFindings" class="form-control" rows="3" placeholder="Key Findings"></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="brixiaScores">Brixia Scores</label>
                    <input required type="text" name="brixiaScores" class="form-control" placeholder="Brixia Scores"></input>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Create</button>
            <a href="/admin" class="btn btn-light mt-3">Camcel</a>
        </form>
    </div>
}

export default createExam;