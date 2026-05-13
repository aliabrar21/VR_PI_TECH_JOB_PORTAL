import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';
import { FileText, User, Briefcase, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await api.get('/applications');
      console.log('Applications fetched:', res.data);
      setApplications(res.data);
    } catch (err) {
      console.error('Failed to fetch applications:', err.response || err);
      setError(err.response?.data?.message || 'Failed to connect to the server');
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await api.put(`/applications/${id}`, { status });
      fetchApplications();
    } catch (err) {
      alert('Failed to update status');
    }
  };


  return (
    <Layout title="Applications">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '0.25rem' }}>Job Applications</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Review and manage candidates for open roles.</p>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Applied For</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? applications.map(app => (
              <tr key={app.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className="user-avatar" style={{ width: '36px', height: '36px' }}>
                      <User size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{app.user_name || 'Anonymous'}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{app.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <Briefcase size={14} color="var(--text-light)" />
                    <span>{app.job_title || 'General Position'}</span>
                  </div>
                </td>

                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>{new Date(app.created_at).toLocaleDateString()}</span>
                  </div>
                </td>
                <td>
                  <span className={`badge ${
                    app.status === 'accepted' ? 'badge-success' : 
                    app.status === 'rejected' ? 'badge-danger' : 
                    'badge-warning'
                  }`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="btn btn-ghost" 
                      style={{ padding: '0.4rem', color: 'var(--success)' }}
                      onClick={() => handleStatusChange(app.id, 'accepted')}
                      title="Accept"
                    >
                      <CheckCircle size={18} />
                    </button>
                    <button 
                      className="btn btn-ghost" 
                      style={{ padding: '0.4rem', color: 'var(--danger)' }}
                      onClick={() => handleStatusChange(app.id, 'rejected')}
                      title="Reject"
                    >
                      <XCircle size={18} />
                    </button>
                    <button 
                      className="btn btn-ghost" 
                      style={{ padding: '0.4rem', color: 'var(--text-light)' }}
                      title="Details"
                    >
                      <FileText size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                  No applications received yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Applications;
