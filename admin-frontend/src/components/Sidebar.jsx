import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FileText, 
  BookOpen, 
  Mail, 
  LogOut,
  ShieldCheck
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  const navItems = [
    { to: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/users', icon: <Users size={20} />, label: 'Users' },
    { to: '/jobs', icon: <Briefcase size={20} />, label: 'Jobs' },
    { to: '/applications', icon: <FileText size={20} />, label: 'Applications' },
    { to: '/knowledge-hub', icon: <BookOpen size={20} />, label: 'Knowledge Hub' },

    { to: '/contacts', icon: <Mail size={20} />, label: 'Contacts' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-logo">
          <ShieldCheck size={28} color="var(--primary)" />
          <span>VR PI TECH</span>
        </NavLink>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.to} 
            to={item.to} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="btn-logout">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

