import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';
import { BookOpen, Briefcase, Plus, Trash2, Edit2, CheckCircle, XCircle } from 'lucide-react';

const KnowledgeHub = () => {
  const [courses, setCourses] = useState([]);
  const [internships, setInternships] = useState([]);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [courseForm, setCourseForm] = useState({ title: '', description: '', instructor: '', duration: '', price: '' });
  const [internshipForm, setInternshipForm] = useState({ title: '', description: '', company: '', duration: '', stipend: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const cRes = await api.get('/courses');
      const iRes = await api.get('/internships');
      setCourses(cRes.data);
      setInternships(iRes.data);
    } catch (err) {
      console.error('Failed to fetch hub data', err);
    }
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/courses/${editingId}`, courseForm);
      } else {
        await api.post('/courses', courseForm);
      }
      setCourseForm({ title: '', description: '', instructor: '', duration: '', price: '' });
      setShowCourseForm(false);
      setEditingId(null);
      fetchData();
    } catch (err) {
      alert('Error saving course');
    }
  };

  const handleInternshipSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/internships/${editingId}`, internshipForm);
      } else {
        await api.post('/internships', internshipForm);
      }
      setInternshipForm({ title: '', description: '', company: '', duration: '', stipend: '' });
      setShowInternshipForm(false);
      setEditingId(null);
      fetchData();
    } catch (err) {
      alert('Error saving internship');
    }
  };

  const deleteItem = async (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await api.delete(`/${type}s/${id}`);
        fetchData();
      } catch (err) {
        alert(`Error deleting ${type}`);
      }
    }
  };

  return (
    <Layout title="Knowledge Hub Management">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ marginBottom: '0.25rem' }}>Knowledge Hub Content</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Manage your courses and internship opportunities.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={() => { setShowCourseForm(true); setShowInternshipForm(false); setEditingId(null); }}>
            <Plus size={18} /> Add Course
          </button>
          <button className="btn btn-secondary" onClick={() => { setShowInternshipForm(true); setShowCourseForm(false); setEditingId(null); }}>
            <Plus size={18} /> Add Internship
          </button>
        </div>
      </div>

      {/* Course Form Modal/Inline */}
      {showCourseForm && (
        <div className="card" style={{ marginBottom: '2rem', border: '1px solid var(--primary-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>{editingId ? 'Edit Course' : 'New Course'}</h3>
            <button className="btn btn-ghost" onClick={() => setShowCourseForm(false)}><XCircle size={20} /></button>
          </div>
          <form onSubmit={handleCourseSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label>Title</label>
              <input type="text" className="form-control" value={courseForm.title} onChange={(e) => setCourseForm({...courseForm, title: e.target.value})} required />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label>Description</label>
              <textarea className="form-control" rows="3" value={courseForm.description} onChange={(e) => setCourseForm({...courseForm, description: e.target.value})} required></textarea>
            </div>
            <div className="form-group">
              <label>Instructor</label>
              <input type="text" className="form-control" value={courseForm.instructor} onChange={(e) => setCourseForm({...courseForm, instructor: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input type="text" className="form-control" placeholder="e.g. 8 Weeks" value={courseForm.duration} onChange={(e) => setCourseForm({...courseForm, duration: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" className="form-control" placeholder="e.g. $499" value={courseForm.price} onChange={(e) => setCourseForm({...courseForm, price: e.target.value})} required />
            </div>
            <div style={{ gridColumn: 'span 2', marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <button type="submit" className="btn btn-primary">Save Course</button>
              <button type="button" className="btn btn-ghost" onClick={() => setShowCourseForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Internship Form */}
      {showInternshipForm && (
        <div className="card" style={{ marginBottom: '2rem', border: '1px solid var(--secondary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>{editingId ? 'Edit Internship' : 'New Internship'}</h3>
            <button className="btn btn-ghost" onClick={() => setShowInternshipForm(false)}><XCircle size={20} /></button>
          </div>
          <form onSubmit={handleInternshipSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label>Title</label>
              <input type="text" className="form-control" value={internshipForm.title} onChange={(e) => setInternshipForm({...internshipForm, title: e.target.value})} required />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label>Description</label>
              <textarea className="form-control" rows="3" value={internshipForm.description} onChange={(e) => setInternshipForm({...internshipForm, description: e.target.value})} required></textarea>
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" className="form-control" value={internshipForm.company} onChange={(e) => setInternshipForm({...internshipForm, company: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input type="text" className="form-control" placeholder="e.g. 3 Months" value={internshipForm.duration} onChange={(e) => setInternshipForm({...internshipForm, duration: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Stipend</label>
              <input type="text" className="form-control" placeholder="e.g. $500/mo" value={internshipForm.stipend} onChange={(e) => setInternshipForm({...internshipForm, stipend: e.target.value})} required />
            </div>
            <div style={{ gridColumn: 'span 2', marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <button type="submit" className="btn btn-secondary">Save Internship</button>
              <button type="button" className="btn btn-ghost" onClick={() => setShowInternshipForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div className="stat-icon" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
              <BookOpen size={24} />
            </div>
            <h3>Courses ({courses.length})</h3>
          </div>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Course Title</th>
                  <th>Instructor</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(c => (
                  <tr key={c.id}>
                    <td style={{ fontWeight: 500 }}>{c.title}</td>
                    <td>{c.instructor}</td>
                    <td style={{ color: 'var(--primary)', fontWeight: 600 }}>{c.price}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-ghost" style={{ padding: '0.4rem', color: 'var(--primary)' }} onClick={() => { setEditingId(c.id); setCourseForm(c); setShowCourseForm(true); setShowInternshipForm(false); }}>
                          <Edit2 size={16} />
                        </button>
                        <button className="btn btn-ghost" style={{ padding: '0.4rem', color: 'var(--danger)' }} onClick={() => deleteItem('course', c.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {courses.length === 0 && <tr><td colSpan="4" style={{ textAlign: 'center', padding: '1rem' }}>No courses found.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>
              <Briefcase size={24} />
            </div>
            <h3>Internships ({internships.length})</h3>
          </div>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Company</th>
                  <th>Stipend</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {internships.map(i => (
                  <tr key={i.id}>
                    <td style={{ fontWeight: 500 }}>{i.title}</td>
                    <td>{i.company}</td>
                    <td style={{ color: '#d97706', fontWeight: 600 }}>{i.stipend}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-ghost" style={{ padding: '0.4rem', color: 'var(--primary)' }} onClick={() => { setEditingId(i.id); setInternshipForm(i); setShowInternshipForm(true); setShowCourseForm(false); }}>
                          <Edit2 size={16} />
                        </button>
                        <button className="btn btn-ghost" style={{ padding: '0.4rem', color: 'var(--danger)' }} onClick={() => deleteItem('internship', i.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {internships.length === 0 && <tr><td colSpan="4" style={{ textAlign: 'center', padding: '1rem' }}>No internships found.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeHub;
