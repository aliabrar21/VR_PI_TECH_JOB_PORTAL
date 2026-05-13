import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Career = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get('/jobs').then(res => setJobs(res.data)).catch(console.error);
  }, []);

  const handleApply = async (jobId) => {
    try {
      await api.post('/applications', { job_id: jobId, resume_link: 'http://example.com/resume.pdf' });
      alert('Applied successfully!');
    } catch (err) {
      alert('You must be logged in to apply.');
    }
  };

  return (
    <div className="page animate-fade-in-up">
      <h2>Career Opportunities</h2>
      <div className="grid">
        {jobs.map(job => (
          <div key={job.id} className="card job-card">
            <h3>{job.title}</h3>
            <p className="company">{job.company} - {job.location}</p>
            <p>{job.description}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <button className="btn" onClick={() => handleApply(job.id)}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
