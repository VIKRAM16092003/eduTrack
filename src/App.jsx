import React from 'react'
import "./App.css";
import SignUp from './pages/SingUp/SignUp.jsx';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';
import NavBar from './Components/NavBar.jsx';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        {/* <Route path='/signup' element={<SignUp/>}></Route> */}
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App