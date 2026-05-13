import React from 'react';
import { MonitorSmartphone, Cloud, Shield, Database, Cpu, Headphones } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      description: "Custom, responsive, and high-performance websites built with modern frameworks to engage your audience.",
      icon: <MonitorSmartphone size={40} className="service-icon" />
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure solutions ensuring high availability, security, and lower operational costs.",
      icon: <Cloud size={40} className="service-icon" />
    },
    {
      title: "Cyber Security",
      description: "Robust security protocols and audits to protect your data and applications from modern cyber threats.",
      icon: <Shield size={40} className="service-icon" />
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and big data processing to derive actionable insights for your business growth.",
      icon: <Database size={40} className="service-icon" />
    },
    {
      title: "AI & Machine Learning",
      description: "Integrate intelligent algorithms and automation to streamline operations and enhance user experiences.",
      icon: <Cpu size={40} className="service-icon" />
    },
    {
      title: "24/7 IT Support",
      description: "Dedicated support team available round-the-clock to resolve technical issues and maintain uptime.",
      icon: <Headphones size={40} className="service-icon" />
    }
  ];

  return (
    <div className="services-page-wrapper animate-fade-in">
      {/* Hero Banner */}
      <div className="services-hero">
        <div className="animate-fade-up">
          <h1>Our Premium Services</h1>
          <p>Empowering your business with cutting-edge technological solutions.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        <div className="services-grid-modern">
          {servicesList.map((service, index) => (
            <div className="service-modern-card reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn-outline">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="services-cta reveal">
        <h2>Ready to transform your business?</h2>
        <p>Contact our experts today to discuss your next big project.</p>
        <button className="btn-cta-solid">Get a Free Consultation</button>
      </div>
    </div>
  );
};

export default Services;
