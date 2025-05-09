import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import "./App.css";
import SignUp from './pages/SingUp/SignUp.jsx';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Courses from './pages/Course/Courses.jsx';
import Contact from './pages/contact/Contact.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import Avcourses from './pages/avcourses/Avcourses.jsx';
import AddCourse from './pages/addCourse/AddCourse.jsx';
import AddLesson from './pages/AddLesson/AddLesson.jsx';
import FeedBack from './pages/Feedback/FeedBack.jsx';
import { useLocation } from 'react-router-dom';

const App = () => {
  // const location = useLocation();
  // const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  // State for loading indicator
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data on app launch
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds (simulate loading)
    }, 1000);
  }, []);

  // Loading Spinner component
  const LoadingSpinner = () => (
    <div className="loading-spinner">
      <span>Loading...</span> {/* You can replace this with a spinner icon */}
    </div>
  );

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* {!hideHeaderFooter &&} */}
           <NavBar />
          <div>
            <Routes>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/' element={<Home />}></Route>
              <Route path="/courses/:courseId" element={<Courses />} />
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path='/About' element={<About />}></Route>
              <Route path='/courses' element={<Avcourses />}></Route>
              <Route path='/feedback' element={<FeedBack />}></Route>
              <Route path='/Addlesson/:courseId' element={<AddLesson />} />
              <Route path='/addCourse' element={<AddCourse />} />
            </Routes>
          </div>
          {/* {!hideHeaderFooter &&} */}
           <Footer />
        </>
      )}
    </div>
  );
};

export default App;
