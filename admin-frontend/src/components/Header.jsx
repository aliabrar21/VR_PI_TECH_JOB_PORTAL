import React from 'react';
import { User, Bell, Search } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="admin-header">
      <div className="header-title">
        <h1>{title || 'Dashboard'}</h1>
      </div>
      
      <div className="header-user">
        <button className="btn btn-ghost" style={{ padding: '0.5rem' }}>
          <Search size={20} />
        </button>
        <button className="btn btn-ghost" style={{ padding: '0.5rem', position: 'relative' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '8px',
            height: '8px',
            background: 'var(--danger)',
            borderRadius: '50%',
            border: '2px solid #fff'
          }}></span>
        </button>
        
        <div style={{ width: '1px', height: '24px', background: 'var(--border)', margin: '0 0.5rem' }}></div>
        
        <div className="header-user">
          <div className="user-avatar">
            <User size={18} />
          </div>
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
