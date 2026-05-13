import React, { useState } from 'react';
import api from '../services/api';

const Contact = () => {
  const countries = [
    { code: 'IN', name: 'India', dial: '+91' },
    { code: 'US', name: 'United States', dial: '+1' },
    { code: 'UK', name: 'United Kingdom', dial: '+44' },
    { code: 'AE', name: 'United Arab Emirates', dial: '+971' },
    { code: 'AU', name: 'Australia', dial: '+61' },
    { code: 'CA', name: 'Canada', dial: '+1' },
    { code: 'DE', name: 'Germany', dial: '+49' },
    { code: 'FR', name: 'France', dial: '+33' },
    { code: 'JP', name: 'Japan', dial: '+81' },
    { code: 'SA', name: 'Saudi Arabia', dial: '+966' },
    { code: 'SG', name: 'Singapore', dial: '+65' },
    { code: 'ZA', name: 'South Africa', dial: '+27' }
  ];

  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phoneCode: 'IN', 
    phone: '', 
    location: 'India', 
    message: '',
    agree: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }
    
    const payload = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      subject: `Contact from ${form.location}`,
      message: `Phone: ${form.phoneCode} ${form.phone}\n\n${form.message}`
    };

    try {
      await api.post('/contact', payload);
      alert('Message sent!');
      setForm({ firstName: '', lastName: '', email: '', phoneCode: 'IN', phone: '', location: 'India', message: '', agree: false });
    } catch (err) {
      alert('Error sending message');
    }
  };

  return (
    <div className="contact-page-wrapper animate-fade-in">
      <div className="contact-header animate-fade-up">
        <h2>Contact us</h2>
        <p>Have a question or want to collaborate? Fill out the form below and our team will get back to you shortly.</p>
      </div>

      <div className="contact-card reveal">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-col reveal delay-1">
              <label>First Name <span>*</span></label>
              <input type="text" placeholder="Enter your first name" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
            </div>
            <div className="form-col reveal delay-1">
              <label>Last Name <span>*</span></label>
              <input type="text" placeholder="Enter last name" required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
            </div>
          </div>

          <div className="form-row reveal delay-2">
            <div className="form-col">
              <label>Email <span>*</span></label>
              <input type="email" placeholder="Enter your email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
          </div>

          <div className="form-row reveal delay-3">
            <div className="form-col">
              <label>Phone Number <span>*</span></label>
              <div className="phone-input-group">
                <select value={form.phoneCode} onChange={e => setForm({...form, phoneCode: e.target.value})}>
                  {countries.map(c => (
                    <option key={c.code} value={c.code}>{c.code}</option>
                  ))}
                </select>
                <input 
                  type="text" 
                  placeholder={countries.find(c => c.code === form.phoneCode)?.dial + " 123 456 789"} 
                  required 
                  value={form.phone} 
                  onChange={e => setForm({...form, phone: e.target.value})} 
                />
              </div>
            </div>
            <div className="form-col">
              <label>Location <span>*</span></label>
              <select required value={form.location} onChange={e => setForm({...form, location: e.target.value})}>
                {countries.map(c => (
                  <option key={c.code} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row reveal delay-4">
            <div className="form-col">
              <label>Message <span>*</span></label>
              <textarea placeholder="Enter your message" required value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
            </div>
          </div>

          <div className="checkbox-row reveal delay-5">
            <input type="checkbox" required checked={form.agree} onChange={e => setForm({...form, agree: e.target.checked})} />
            <label>I agree with <a href="#">Term and Condition</a></label>
          </div>

          <button type="submit" className="btn-submit-full reveal delay-5">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
