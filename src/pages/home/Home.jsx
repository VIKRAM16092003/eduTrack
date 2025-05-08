import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const admin = true; // Set this based on user authentication

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const isAuthenticated = token?.includes("Login successful!");
    
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);
  const isAdmin=localStorage.getItem("role") === "admin";

  return (
    <div className="home-container">
      {/* Welcoming Banner */}
      <div className="welcome-banner">
        <h1 className="welcome-heading">Welcome to EduTech</h1>
        <p className="welcome-subtext">Empowering learners with high-quality tech courses</p>
        <Link to="/courses" className="explore-btn">Explore Courses</Link>
      </div>

      {/* Admin Action */}
      {isAdmin && (
        <Link to="/addCourse">
          <button type="submit" className="create-btn">Create Course</button>
        </Link>
      )}

      {/* Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          At EduTech, our mission is to bridge the gap between education and employment by
          providing hands-on, accessible tech education for everyone. Whether you're a student,
          professional, or a lifelong learner — we’ve got something for you.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose EduTech?</h2>
        <div className="features-grid">
          <div className="feature-card">🚀 Learn at Your Pace</div>
          <div className="feature-card">📚 Industry-Relevant Courses</div>
          <div className="feature-card">👨‍🏫 Expert Instructors</div>
          <div className="feature-card">💼 Career-Focused Curriculum</div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="popular-courses">
        <h2>Popular Courses</h2>
        <div className="course-preview">
          <div className="course-card">
            <h3>Full Stack Development</h3>
            <p>Master frontend and backend using React, Node, and MongoDB.</p>
            <Link to="/courses" className="course-link">View Course</Link>
          </div>
          <div className="course-card">
            <h3>Data Science Bootcamp</h3>
            <p>Learn Python, Machine Learning, and Data Visualization techniques.</p>
            <Link to="/courses" className="course-link">View Course</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          “EduTech transformed the way I learn. The platform is intuitive, and the content is world-class!”
        </div>
        <div className="testimonial">
          “Thanks to EduTech, I landed my dream job in tech after completing their full stack program.”
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 EduTech. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
