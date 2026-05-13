import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';
import { Mail, User, Calendar, MessageSquare, Trash2, CheckCircle } from 'lucide-react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await api.get('/contact');

      setContacts(res.data);
    } catch (err) {
      console.error('Failed to fetch contacts:', err);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Delete this message?')) {
      try {
        await api.delete(`/contacts/${id}`);
        fetchContacts();
      } catch (err) {
        alert('Failed to delete message');
      }
    }
  };

  return (
    <Layout title="Contact Messages">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '0.25rem' }}>Inquiries</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Messages from users via the contact form.</p>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Sender</th>
              <th>Message Preview</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? contacts.map(msg => (
              <tr key={msg.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className="user-avatar" style={{ width: '36px', height: '36px', backgroundColor: '#fef3c7', color: '#d97706' }}>
                      <User size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{msg.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Mail size={12} />
                        <span>{msg.email}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ maxWidth: '300px' }}>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {msg.message}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 500, marginTop: '0.25rem' }}>
                    Subject: {msg.subject || 'No Subject'}
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>{new Date(msg.created_at).toLocaleDateString()}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-ghost" style={{ padding: '0.4rem', color: 'var(--primary)' }} title="Reply">
                      <MessageSquare size={18} />
                    </button>
                    <button className="btn btn-ghost" style={{ padding: '0.4rem', color: 'var(--success)' }} title="Mark as Read">
                      <CheckCircle size={18} />
                    </button>
                    <button 
                      className="btn btn-danger-ghost" 
                      style={{ padding: '0.4rem' }}
                      onClick={() => handleDelete(msg.id)}
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Contacts;
