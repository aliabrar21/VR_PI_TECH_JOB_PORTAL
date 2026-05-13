import React from 'react';

const Companies = () => {
  const companyImages = [
    { id: 1, name: 'Company 1' },
    { id: 2, name: 'Company 2' },
    { id: 3, name: 'Company 3' },
    { id: 4, name: 'Company 4' },
    { id: 5, name: 'Company 5' },
    { id: 6, name: 'Company 6' },
  ];

  return (
    <div className="page companies-page animate-fade-in">
      <div className="companies-header animate-fade-up">
        <h2>Our Companies</h2>
      </div>
      
      <p className="companies-description animate-fade-up delay-1">
        VR PI Group is an ecosystem of innovative companies dedicated to providing exceptional technology services, education, and professional workspaces. Each of our companies specializes in a unique niche, ensuring that we deliver the highest quality solutions to our partners.
      </p>

      <div className="companies-grid">
        {companyImages.map((company, index) => (
          <div key={company.id} className="company-image-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="placeholder-image">
              {company.name} Image
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
