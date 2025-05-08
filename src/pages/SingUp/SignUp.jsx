import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate here

  const handleRegister = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!name || !role || !password) {
      setError('Please fill in all fields');
      return;
    }

    const user = { username: name, password, role };

    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const textData = await response.text();
        console.log(textData); // Log response text
        navigate('/login');
        if (textData.includes("User created successfully")) {
          alert(textData); // Show success message
          // Navigate to signin page
        } else {
          setError(textData); // Set error if registration fails
        }
      } else {
        const errorText = await response.text();
        setError(errorText || 'Registration failed!');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="addUser">
      <h3 className="signup-text">Sign Up</h3>
      <form className="addUserForm" onSubmit={handleRegister}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter your role"
          />
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="login">
        <p>Already have an account?</p>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
