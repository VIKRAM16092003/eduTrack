import React, { useState } from 'react'
import "./SignUp.css";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  return (
    <div className='addUser'>

        <h3 className='signup-text'>Sign Up</h3>
        <form className='addUserForm'>
            

            <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter the name'></input>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={email} onChange={(e)=>setEmail(e.target.value)
                } placeholder='enter the Email'></input>

                <label htmlFor='name'>Password</label>
                <input type='password' id='password'value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter the password'></input>
                <button type="submit" className="btn btn-success">SignUp</button>
            </div>



            
        </form>
        <div className='login'>
            <p>Already have an Account ?</p>
            <Link to="/login"> 
            <button type="submit" className="btn btn-primary">Signin</button>
            </Link>
        </div>

    </div>
  )
}

export default SignUp