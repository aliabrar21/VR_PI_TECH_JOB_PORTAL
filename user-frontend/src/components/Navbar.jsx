import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { 
  Mail, 
  MessageCircle,
  X
} from 'lucide-react';


// Custom SVG Icons to avoid lucide-react version issues
const FacebookIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48a2.78 2.78 0 0 0-1.94 1.94C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 1.94c1.72.48 8.6.48 8.6.48s6.88 0 8.6-.48a2.78 2.78 0 0 0 1.94-1.94C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const LinkedinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Navbar = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      {/* Top Bar: Social Icons */}
      <div className="navbar-top">
        <div className="social-join-text">Join Us Via</div>
        <div className="social-links">
          <a href="#" className="social-icon-nav"><MessageCircle size={20} fill="#e11d48" color="#e11d48" /></a>
          <a href="#" className="social-icon-nav"><TwitterIcon size={20} color="#e11d48" /></a>
          <a href="#" className="social-icon-nav"><YoutubeIcon size={20} color="#e11d48" /></a>
          <a href="#" className="social-icon-nav"><Mail size={20} color="#e11d48" /></a>
          <a href="#" className="social-icon-nav"><FacebookIcon size={20} color="#e11d48" /></a>
          <a href="#" className="social-icon-nav"><LinkedinIcon size={20} color="#e11d48" /></a>
          <a href="#" className="social-icon-nav"><InstagramIcon size={20} color="#e11d48" /></a>
        </div>

      </div>

      {/* Middle Bar: Logo and Black Section */}
      <div className="navbar-middle">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="VR Pi Logo" className="navbar-logo-img" />
          </Link>
        </div>

        <div className="black-section">
          <div className="slanted-edge"></div>
          <div className="black-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/career">Careers</NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Lower Links and Auth Button */}
      <div className="navbar-bottom">
        <div className="bottom-links-container">
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/knowledge-hub">Knowledge Hub</NavLink>
          <NavLink to="/trust">Trust & Welfare</NavLink>
        </div>
        <div className="auth-section">
          {token ? (
            <button onClick={handleLogout} className="btn-signup-orange">Logout</button>
          ) : (
            <Link to="/login" className="btn-signup-orange">Sign-Up</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

