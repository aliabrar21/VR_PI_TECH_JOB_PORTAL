import React from 'react';
import { Target, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Target size={32} />, title: "Mission Driven", desc: "We are committed to delivering impactful tech solutions." },
    { icon: <Zap size={32} />, title: "Innovation", desc: "Constantly pushing the boundaries of what is possible." },
    { icon: <Users size={32} />, title: "Collaboration", desc: "Working together to achieve greatness for our clients." },
    { icon: <Award size={32} />, title: "Excellence", desc: "Delivering top-tier quality in everything we build." }
  ];

  return (
    <div className="about-page-wrapper animate-fade-in">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content animate-fade-up">
          <h1>About VR PI Group</h1>
          <p>Empowering individuals and businesses through technology, education, and flexible workspace solutions.</p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="about-container">
        <div className="who-we-are reveal">
          <div className="who-text">
            <h2>Who We Are</h2>
            <div className="orange-line"></div>
            <p>
              Founded with a vision to bridge the gap between education and professional workspaces, VR PI Group is an ecosystem of innovative companies. We specialize in custom software development, cloud infrastructure, and providing state-of-the-art co-working environments.
            </p>
            <p>
              Our dedicated teams work relentlessly to ensure that our partners stay ahead in a rapidly evolving digital landscape. We believe that technology should be an enabler, and we strive to make it accessible to everyone.
            </p>
          </div>
          <div className="who-image">
            <div className="about-image-placeholder animate-slide-right">Our Journey</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values-section reveal">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((val, idx) => (
              <div className="value-card reveal" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Banner */}
      <div className="about-join-us reveal">
        <h2>Want to be part of our story?</h2>
        <p>Explore our career opportunities or drop us a message to collaborate.</p>
        <div className="about-actions">
          <a href="/career" className="btn-solid-orange">View Careers</a>
          <a href="/contact" className="btn-outline-white">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default About;
