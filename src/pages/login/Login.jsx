import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='addUser'>

        <h3 className='signup-text'>logIn</h3>
        <form className='addUserForm'>
            <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='enter the name'></input>

                <label htmlFor='name'>Password</label>
                <input type='password' id='password' placeholder='enter the password'></input>
                <button type="submit" class="btn btn-success">LogIn</button>
            </div>
        </form>
        <div className='login'>
            <p>Create An Account ?</p>
            <Link to='/'>
            <button type="submit" class="btn btn-primary">SignUp</button>
          </Link>        
        </div>

    </div>
  )
}

export default Login