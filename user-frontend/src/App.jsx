import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import Services from './pages/Services';
import KnowledgeHub from './pages/KnowledgeHub';
import Career from './pages/Career';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Trust from './pages/Trust';
import './index.css';

const ScrollManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const hideFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/career" element={<Career />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trust" element={<Trust />} />

        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollManager />
      <AppContent />
    </Router>
  );
}

export default App;
