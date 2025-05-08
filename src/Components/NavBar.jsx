import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const Navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token or relevant key
    // Optionally clear all local storage: localStorage.clear();
  
    // Redirect to login or homepage
    Navigate("/login");
  };
  
  
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
          <h1
  className="m-0 text-uppercase text-primary"
  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
>

              <i className="fa fa-book-reader mr-3"></i>EduTech
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              
              <Link to="/courses" className="nav-item nav-link">Courses</Link>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu dropdown-menu-end m-0">
                  <Link to="/CourseDetail" className="dropdown-item">Course Detail</Link>
                  <Link to="/Features" className="dropdown-item">Our Features</Link>
                  <Link to="/Team" className="dropdown-item">Instructors</Link>
                  <Link to="/Feedback" className="dropdown-item">Feedback</Link>
                </div>
              </div>
              <Link to="/About" className="nav-item nav-link">About</Link>
              <Link to="/Contact" className="nav-item nav-link">Contact</Link>
              <button onClick={handleLogout} className="btn btn-primary">Log Out</button>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
