import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Exams from "./Exams";
import ExamViewer from "./ExamViewer";
import ExamViewer2 from "./ExamViewer2";
import { Navigate } from "react-router-dom";
import UpdateExam from "./pages/updateExam";
import CreateExam from "./pages/createExam";
import PatientPage from "./pages/patientPage";
// import PatientPage from "./pages/patientPage";
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'; // Import from React Router

const Navbar = () => {
    const handleLinkClick = () => {
        // Reload the page when the link is clicked
        window.reload();
    };
    const [currentPage, setCurrentPage] = useState('exams');
    const location = useLocation();

    // Ensure create exam is only showed when making an exam
    useEffect(() => {
        // Extract the current route from the location object
        const currentRoute = location.pathname;
        const pathSegments = location.pathname.split('/'); // Split the pathname into segments
        const lastSegment = pathSegments[pathSegments.length - 1]; // Get the last segment
        console.log(currentPage);
        // Update the currentPage state based on your logic
        if (currentRoute === '/exams') {
            setCurrentPage('exams');
        } else if (currentRoute === '/admin') {
            setCurrentPage('admin');
        } else if (currentRoute == "/update") {
            setCurrentPage('update');
        }
        // console.log(currentPage);


    }, [location.pathname]);

    return (
        // Navbar
        <div>
            <nav className="navbar">
                <h1> Doctor App</h1>
                <div className="links">
                    {/* Links to Pages  */}
                    <Link to='/exams' onClick={handleLinkClick}> Exams </Link>
                    <Link to='/admin' onClick={handleLinkClick}> Admin </Link>
                    {(currentPage == 'admin' || currentPage === 'update') && (
                        <>
                            <Link to='/exams/create' onClick={handleLinkClick} > Create Exam</Link>
                        </>
                    )

                    }

                </div>
            </nav>
            <div class="container-xxl">
                <Routes>
                    <Route path="/" element={<Navigate to="/exams" replace />} />
                    {/* Routes to Components */}
                    <Route path="/exams" element={<Exams />} />
                    {/* <Route path="Exam" element={<ExamViewer match={sampleExam}/>} /> */}
                    <Route path="/admin" element={<Admin />} />
                    {/* <Route path="/exam/:examId" element={<ExamViewer/>} /> */}
                    <Route path="/exam/:examId" element={<ExamViewer />} />
                    <Route path="/exam/:examId/update" element={<UpdateExam />} />
                    <Route path="/exams/create" element={<CreateExam />} />
                    <Route path="/patient/:patientId" element={<PatientPage />} />


                </Routes>
            </div>
        </div>




    );

}

export default Navbar;