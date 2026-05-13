import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        <Header title={title} />
        <div className="admin-content animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

