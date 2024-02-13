// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
const  Navbar = () => {
    return (  
        // <Router>
        <nav className="navbar"> 
        <h1> Doctor App</h1>
        <div className="links">
            <a href="/">Exams</a>
            <a href="/create">Admin</a>
            {/* <Link to= '/Admin'> Admin </Link> */}

        </div>
        </nav>
        // <Route path="/admin" component={Admin} />
        // </Router>
    );
}
 
export default Navbar;