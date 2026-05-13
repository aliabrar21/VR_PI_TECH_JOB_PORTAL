import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Eye, EyeOff } from 'lucide-react';
import loginImg from '../assets/login-img.jpg';

const Login = () => {

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Please agree to the Terms and Conditions');
      return;
    }
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Authentication error');
    }
  };

  return (
    <div className="auth-wrapper" style={{ backgroundImage: `url(${loginImg})` }}>
      <div className="auth-container">

        <div className="auth-left">
          <p className="signup-prompt-text">Are you new user to VR Pi ?</p>
          <button className="signup-btn" onClick={() => navigate('/signup')}>
            Sign-Up
          </button>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter Mail ID" 
                  required 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                />
              </div>

              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter Password" 
                  required 
                  value={form.password} 
                  onChange={e => setForm({...form, password: e.target.value})} 
                />
                <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={24} color="#ff6b00" /> : <Eye size={24} color="#ff6b00" />}
                </span>
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    checked={rememberMe} 
                    onChange={e => setRememberMe(e.target.checked)} 
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="/forgot-password" title="Coming soon">Forgot Password ?</a>
              </div>

              <div className="form-options terms">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    checked={agreeTerms} 
                    onChange={e => setAgreeTerms(e.target.checked)} 
                  />
                  <span className="checkmark"></span>
                  I, agree to all the <span className="highlight">Terms and Conditions</span> according to the company norms
                </label>
              </div>

              <button type="submit" className="signin-btn">Sign-in</button>

              <div className="social-auth">
                <button type="button" className="social-btn google-btn">
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                  Login via Google
                </button>
                <button type="button" className="social-btn linkedin-btn">
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/>
                    <path fill="#FFF" d="M12,19h6v17h-6V19z M15,10c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S13.343,10,15,10z M34,19c-2.905,0-5.11,1.558-6,3.14V19h-6v17h6v-9c0-1.657,1.343-3,3-3s3,1.343,3,3v9h6v-10C40,21.227,37.195,19,34,19z"/>
                  </svg>
                  Login via LinkedIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
