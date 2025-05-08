import { Link, useParams } from "react-router-dom";
import "./Course.css";
import { useEffect, useState } from "react";

function Courses() {

  const admin=true;
  const { courseId } = useParams();

  const [courses, setCourses] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  useEffect(() => {
    if (courseId) {
      fetch(`http://localhost:8081/api/courses/${courseId}/lessons`)
        .then(res => res.json())
        .then(data => setVideos(data))
        .catch(err => console.error("Error fetching videos:", err));
    }
  }, [courseId]);

  const isAdmin=localStorage.getItem("role") === "admin";

  const course = courses.find(course => course.id === parseInt(courseId));
  
  
  const courseVideos = videos.filter(video => video.course?.id === parseInt(courseId));

  return (

    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{course?.title || "Loading..."}</h1>
      <p className="text-lg text-gray-600 mb-6">{course?.description}</p>

      <div className="space-y-6" >
        {courseVideos.map((video) => (
          <div key={video.id} id="card" className="bg-white rounded-lg border p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-700">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{video.notes}</p>
            <a
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-video-button"
            >
              ▶ Watch Video
            </a>
          </div>
        ))}
        {isAdmin?
        <div className="create">
        <Link to={`/Addlesson/${courseId}`}>
        <button id="create" className="btn btn-primary">CREATE LESSON</button>
        </Link>
        </div>:""
}
      </div>
    </div>
  );
}

export default Courses;
