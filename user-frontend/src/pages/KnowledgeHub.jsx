import React, { useState, useEffect } from 'react';
import api from '../services/api';

const KnowledgeHub = () => {
  const [courses, setCourses] = useState([]);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cRes = await api.get('/courses');
        const iRes = await api.get('/internships');
        setCourses(cRes.data);
        setInternships(iRes.data);
      } catch (err) {
        console.error("Error fetching knowledge hub data", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page animate-fade-in-up">
      <h2>Knowledge Hub</h2>
      <div className="hub-section">
        <h3>Available Courses</h3>
        <div className="grid">
          {courses.map(c => (
            <div key={c.id} className="card">
              <h4>{c.title}</h4>
              <p>{c.description}</p>
              <p><strong>Instructor:</strong> {c.instructor}</p>
              <p><strong>Duration:</strong> {c.duration}</p>
              <p className="price">{c.price}</p>
              <button className="btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
      <div className="hub-section">
        <h3>Internships</h3>
        <div className="grid">
          {internships.map(i => (
            <div key={i.id} className="card">
              <h4>{i.title}</h4>
              <p>{i.description}</p>
              <p><strong>Company:</strong> {i.company}</p>
              <p><strong>Duration:</strong> {i.duration}</p>
              <p><strong>Stipend:</strong> {i.stipend}</p>
              <button className="btn">Apply Internship</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
