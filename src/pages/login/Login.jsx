import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Importing the navigate hook

  const handlelogin = async (e) => {
    e.preventDefault();

    const user = {
      username: name,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      
      const data = await response.text();

      if (response.status === 200 && data.startsWith("Login successful!")) { 
        const role = data.split(" ")[2];
        localStorage.setItem('role', role);
        localStorage.setItem('authToken', data); // Just storing the success message
        navigate('/');
      } else {
        setError(data || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="addUser">
      <h3 className="signup-text">LogIn</h3>
      <form className="addUserForm" onSubmit={handlelogin}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Enter the name"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter the password"
          />
          <button type="submit" className="btn btn-success">Log In</button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="login">
        <p>Create An Account?</p>
        <Link to="/signup">
          <button type="button" className="btn btn-primary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
