import React from 'react'
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
const App = () => {
  return (
    <div>
      <NavBar/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/courses/:courseId" element={<Courses/>} />
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/courses' element={<Avcourses/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Addlesson/:courseId' element={<AddLesson/>}></Route>
        <Route path='/addCourse' element={<AddCourse/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App