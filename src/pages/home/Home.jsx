import { Link, Links } from "react-router-dom";
import "./Home.css"; // Ensure you style the new elements


function Home() {
  const admin=true;
  return (
    <div className="home-container">
      {/* Welcoming Banner */}
      <div className="welcome-banner">
        <h1 className="welcome-heading">Welcome to EduTech</h1>
        <p className="welcome-subtext">Empowering learners with high-quality tech courses</p>
        <Link to="/courses" className="explore-btn">Explore Courses</Link>
      </div>
      {admin?
      <Link to="/addCourse" >
      <button type="submit" className="btn btn-primary">Create Course</button>
      </Link>:""}

      
    </div>
  );
}

export default Home;
