import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';
import { Plus, Edit, Trash2, MapPin, Briefcase, Clock, Calendar } from 'lucide-react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get('/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
    }
  };

  const handleAdd = async () => {
    const title = prompt('Job Title:');
    if(!title) return;
    try {
      await api.post('/jobs', { 
        title, 
        description: 'New job description', 
        company: 'VR PI TECH', 
        location: 'Remote', 
        salary: 'Negotiable' 
      });
      fetchJobs();
    } catch (err) {
      alert('Failed to add job');
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this job listing?')) {
      try {
        await api.delete(`/jobs/${id}`);
        fetchJobs();
      } catch (err) {
        alert('Failed to delete job');
      }
    }
  };

  return (
    <Layout title="Job Listings">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ marginBottom: '0.25rem' }}>Active Roles</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Manage career opportunities at VR PI TECH.</p>
        </div>
        <button className="btn btn-primary" onClick={handleAdd} style={{ gap: '0.5rem' }}>
          <Plus size={18} />
          <span>Add New Job</span>
        </button>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Role & Details</th>
              <th>Location</th>
              <th>Company</th>
              <th>Posted On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? jobs.map(j => (
              <tr key={j.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '8px', 
                      backgroundColor: 'var(--primary-light)', 
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{j.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={12} />
                        <span>Full Time</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                    <MapPin size={14} color="var(--text-light)" />
                    <span>{j.location || 'Remote'}</span>
                  </div>
                </td>
                <td>
                  <span className="badge badge-primary">{j.company || 'VRPI'}</span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>{j.created_at ? new Date(j.created_at).toLocaleDateString() : 'Just now'}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-ghost" style={{ padding: '0.5rem' }} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button 
                      className="btn btn-danger-ghost" 
                      style={{ padding: '0.5rem' }} 
                      onClick={() => handleDelete(j.id)}
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                  No jobs found. Click "Add New Job" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Jobs;

