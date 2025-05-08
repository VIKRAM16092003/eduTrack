import React, { useEffect, useState } from 'react';
import "./FeedBack.css";

const FeedBack = () => {
  const [feedback, setFeedBack] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/feedback")
      .then(res => res.json())
      .then(data => setFeedBack(data))
      .catch(error => console.error("Error fetching feedback:", error));
  }, []);

  return (
    <div className="feedback-container">
      <h2>Student Feedback</h2>
      {feedback.length > 0 ? (
        feedback.map(entry => (
          <div key={entry.id} className="feedback-card">
            <h3>{entry.name}</h3>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Feedback:</strong> {entry.feedback}</p>
          </div>
        ))
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default FeedBack;
