import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';
import { User, Mail, Shield, Trash2, MoreVertical, Search } from 'lucide-react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      setError(err.response?.data?.message || 'Failed to connect to the server');
    }
  };


  const handleRoleChange = async (id, role) => {
    try {
      await api.put(`/users/${id}/role`, { role });
      fetchUsers();
    } catch (err) {
      alert('Failed to update role');
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      try {
        await api.delete(`/users/${id}`);
        fetchUsers();
      } catch (err) {
        alert('Failed to delete user');
      }
    }
  };

  const filteredUsers = users.filter(u => 
    (u.name && u.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
    (u.email && u.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  return (
    <Layout title="User Management">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ marginBottom: '0.25rem' }}>Platform Users</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>View and manage user permissions and accounts.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
          <input 
            type="text" 
            placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              padding: '0.625rem 1rem 0.625rem 2.5rem', 
              borderRadius: '0.5rem', 
              border: '1px solid var(--border)',
              width: '300px',
              fontSize: '0.875rem'
            }}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User Information</th>
              <th>Email Address</th>
              <th>Access Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'var(--danger)' }}>
                  Error: {error}
                </td>
              </tr>
            ) : filteredUsers.length > 0 ? filteredUsers.map(u => (
              <tr key={u.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className="user-avatar" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                      {u.name ? u.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{u.name || 'Unknown User'}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>ID: #{u.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <Mail size={14} />
                    <span>{u.email}</span>
                  </div>
                </td>
                <td>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <select 
                      value={u.role} 
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      style={{ 
                        padding: '0.4rem 2rem 0.4rem 0.75rem', 
                        borderRadius: '0.375rem', 
                        border: '1px solid var(--border)',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        backgroundColor: u.role === 'admin' ? '#eef2ff' : '#f8fafc',
                        color: u.role === 'admin' ? 'var(--primary)' : 'var(--text-main)',
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="user">Standard User</option>
                      <option value="admin">Administrator</option>
                    </select>
                    <Shield size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </td>
                <td>
                  <span className="badge badge-success">Active</span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-ghost" style={{ padding: '0.5rem' }}>
                      <MoreVertical size={16} />
                    </button>
                    <button 
                      className="btn btn-danger-ghost" 
                      style={{ padding: '0.5rem' }}
                      onClick={() => handleDelete(u.id)}
                      title="Delete User"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                  No users matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Users;

