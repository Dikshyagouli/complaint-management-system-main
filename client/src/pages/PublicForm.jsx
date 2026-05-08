import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PublicForm = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/complaints/public', formData);
      console.log('Complaint submitted:', response.data);
      setMessage('Complaint submitted successfully! Thank you.');
      setFormData({ name: '', email: '', title: '', description: '' }); // Clear the form
    } catch (error) {
      console.error('Error submitting complaint:', error.response?.data);
      setMessage('Failed to submit complaint. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page-container">
      <div className="form-content">
        <h2>{content.formTitle}</h2>
        <p className="contact-intro">{content.formIntro}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">{content.nameLabel}</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">{content.emailLabel}</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">{content.titleLabel}</label>
            <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">{content.descriptionLabel}</label>
            <textarea className="form-control" rows="4" name="description" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? content.submittingButton: content.submitButton}
          </button>
          
          {message && <p className="mt-3">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default PublicForm;