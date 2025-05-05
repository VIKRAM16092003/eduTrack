import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './avcourse.css';  // Ensure this CSS file is correct

// const courses = [
//   { id: 1, category: "Programming", title: "Java Programming", description: "Learn the fundamentals of Java." },
//   { id: 2, category: "Programming", title: "C Programming", description: "Learn the fundamentals of C." },
// ];

const Avcourses = () => {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{fetch("http://localhost:8081/api/courses").then(res=>res.json()).then(res=>setCourses(res))},[]);
  
  
  return (
    <div className="courses-container">
      <h2 className="home-heading">Available Courses</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="course-card no-underline"
          >
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-category">{course.category}</p>
          </Link>
        ))}
        
      </div>
    </div>
  );
}

export default Avcourses;
