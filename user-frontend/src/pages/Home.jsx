import React, { useState } from 'react';
import { Target, Shield, Zap, TrendingUp, Monitor, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: "Reethika Purella",
      role: "Business Development Manager",
      text: "VR PI Group transformed our digital strategy. Their dedication to operational excellence and technical proficiency helped us expand our reach and optimize our workflows significantly."
    },
    {
      name: "Jhansi R Sandeep Kumar Pikili",
      role: "CEO & Founder",
      text: "The strategic partnership with VR PI Group was a game-changer. Their innovative approach and commitment to our vision allowed us to launch a robust platform that exceeded all expectations."
    },
    {
      name: "Sushritha Maidam",
      role: "UI/UX Designer",
      text: "Working with the VR PI Group team was a seamless experience. Their technical implementation of complex designs is flawless, and their focus on user experience is truly top-notch."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-container animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content animate-fade-up">
          <h1>
            Innovating the Future<br />
            of Digital Workspaces<br />
            and Technology.
          </h1>
          <p className="hero-subtext">
            We deliver state-of-the-art technological solutions, scalable cloud infrastructures, and premium co-working spaces to empower your business growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-explore">Explore More <ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="hero-image-container animate-slide-right">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" alt="Technology Workspace" className="hero-img animate-scale" />
        </div>
      </section>

      {/* Certified Section */}
      <section className="certified-section">
        <div className="certified-item reveal delay-1">
          <h3>ISO 9001</h3>
          <p>Certified Quality</p>
        </div>
        <div className="certified-divider reveal"></div>
        <div className="certified-item reveal delay-2">
          <h3>Award Winning</h3>
          <p>Best Tech Startup</p>
        </div>
        <div className="certified-divider reveal"></div>
        <div className="certified-item reveal delay-3">
          <h3>Top Rated</h3>
          <p>5-Star Client Reviews</p>
        </div>
      </section>

      {/* Our Ecosystem Section */}
      <section className="our-companies-section">
        <h2 className="reveal">Our Ecosystem & Services</h2>
        <div className="companies-content">
          <div className="companies-image-container reveal animate-slide-right">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" alt="Team Collaboration" className="company-img animate-scale" />
          </div>
          <div className="companies-text reveal animate-fade-up delay-2">
            <h3>Empowering Growth Through Synergy</h3>
            <p className="companies-subtitle">Connecting education, technology, and flexible workspaces.</p>
            <p>At VR PI Group, our ecosystem is designed to foster innovation. From high-performance software engineering teams to engaging learning platforms and modern co-working hubs, we provide the complete infrastructure you need to succeed in the digital era.</p>
            <button className="btn-explore">Learn More <ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services-section">
        <div className="services-header reveal">
          <h2>We bring you the best Services</h2>
          <p>Our dedicated teams provide tailored solutions that drive efficiency, enhance security, and scale alongside your business.</p>
        </div>
        <div className="services-grid-home">
          <div className="service-card-clean reveal delay-1">
            <Monitor className="text-orange" size={40} />
            <h4>Custom Software</h4>
            <p>End-to-end development of robust web and mobile applications.</p>
          </div>
          <div className="service-card-clean reveal delay-2">
            <Shield className="text-orange" size={40} />
            <h4>Cyber Security</h4>
            <p>Comprehensive audits and implementation of strict security protocols.</p>
          </div>
          <div className="service-card-clean reveal delay-3">
            <TrendingUp className="text-orange" size={40} />
            <h4>Data Analytics</h4>
            <p>Transforming raw data into actionable business insights.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item reveal delay-1">
            <h4>10+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-item reveal delay-2">
            <h4>200+</h4>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item reveal delay-3">
            <h4>50+</h4>
            <p>Expert Team</p>
          </div>
          <div className="stat-item reveal delay-4">
            <h4>99%</h4>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="section-title reveal">
          <h2>Why Choose Us</h2>
          <h3>Dedicated to your success</h3>
          <p>We blend technical expertise with deep industry knowledge to deliver solutions that give you a competitive edge.</p>
        </div>
        <div className="choose-grid">
          <div className="choose-card reveal delay-1">
            <div className="choose-icon-clean"><Target size={24} /></div>
            <h4>Goal Oriented</h4>
            <p>Every project we undertake is driven by clear, measurable business objectives ensuring maximum ROI.</p>
          </div>
          <div className="choose-card reveal delay-2">
            <div className="choose-icon-clean"><Zap size={24} /></div>
            <h4>Fast Execution</h4>
            <p>Agile methodologies allow us to deliver high-quality solutions rapidly without compromising stability.</p>
          </div>
          <div className="choose-card reveal delay-3">
            <div className="choose-icon-clean"><CheckCircle size={24} /></div>
            <h4>Quality Assurance</h4>
            <p>Rigorous testing and continuous integration ensure that our deliverables meet the highest standards.</p>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="partners-section">
        <div className="section-title reveal">
          <h2>Our Partners</h2>
          <p>We collaborate with industry leaders to provide you with the best technology stack available.</p>
        </div>
        <div className="partners-grid-clean">
          {['Microsoft', 'AWS', 'Google Cloud', 'Cisco', 'IBM', 'Oracle', 'Intel', 'Dell'].map((partner, i) => (
            <div key={i} className="partner-box-clean reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              {partner}
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="testimonials-section reveal">
        <h2>Client Testimonials</h2>
        <div className="testimonial-container">
          <button className="nav-arrow" onClick={prevTestimonial}><ChevronLeft size={32} /></button>
          <div className="testimonial-card animate-fade-in" key={currentTestimonial}>
            <span className="quote-icon">"</span>
            <p>{testimonials[currentTestimonial].text}</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentTestimonial].name}</h4>
              <p>{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <button className="nav-arrow" onClick={nextTestimonial}><ChevronRight size={32} /></button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="reveal">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest tech insights, company news, and exclusive offers.</p>
        </div>
        <div className="newsletter-form reveal delay-2">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
