import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Exams from "./Exams";
import ExamViewer from "./ExamViewer";
import UpdateExam from "./pages/updateExam";

const Navbar = () => {
    const sampleExam = {
        "_id": "61e83d679dc59e6e8e11a1c1",
        "patientId": "x888888",
        "age": 42,
        "sex": "m",
        "zipCode": "72100",
        "bmi": 22,
        "__v": 0,
        "examId": "Exam-4",
        "keyFindings": "Right basilar atelectasis",
        "brixiaScores": "1,2,3,4",
        "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_PORTABLE_2.png"
    }

    return (
        // Navbar
        <div>
            <nav className="navbar">
                <h1> Doctor App</h1>
                <div className="links">
                    {/* Links to Pages  */}
                    <Link to='/exams'> Exams </Link>
                    <Link to='/Exam' > Single Exam</Link>
                    <Link to='/admin'> Admin </Link>
                </div>
            </nav>
            <Routes>
                {/* Routes to Components */}
                <Route path="/exams" element={<Exams />} />
                <Route path="Exam" element={<ExamViewer match={sampleExam} />} />
                <Route path="/admin" element={<Admin />} />
                <Route exact path="/exam/:examId/update" element={<UpdateExam />} />

            </Routes>

        </div>




    );

}

export default Navbar;