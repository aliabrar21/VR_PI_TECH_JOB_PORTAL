import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      if(res.data.user.role !== 'admin') {
         alert('Access denied. Admin only.');
         return;
      }
      localStorage.setItem('adminToken', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card animate-fade-in">
        <div className="login-header">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <ShieldCheck size={48} color="var(--primary)" />
          </div>
          <h1>Admin Portal</h1>
          <p>Sign in to manage VR PI TECH platform</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Admin Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                type="email" 
                id="email"
                placeholder="admin@vrpi.tech" 
                required 
                value={form.email} 
                onChange={e => setForm({...form, email: e.target.value})}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                type="password" 
                id="password"
                placeholder="••••••••" 
                required 
                value={form.password} 
                onChange={e => setForm({...form, password: e.target.value})}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary btn-login">
            <span>Sign In</span>
            <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </button>
        </form>
        
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            &copy; 2026 VR PI TECH. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

