import React, { useState } from 'react';

const Contact = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="form-page-container">
      <div className="form-content">
       <section 
        className="about-hero text-white text-center py-4 mb-5 animate__animated animate__fadeIn"
        style={{
          background: 'linear-gradient(135deg, #0d6efd, #004d9c)',
        }}
      >
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">{content.contactTitle}</h1>
          <p className="lead px-4 mx-auto" style={{ maxWidth: '700px' }}>
            {content.contactSubtitle}
          </p>
        </div>
      </section>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3>{content.getInTouch}</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>{content.emailMethod}</h4>
                  <p>{content.emailAddress}</p>
                  <span>{content.emailResponse}</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>{content.phoneMethod}</h4>
                  <p>{content.phoneNumber}</p>
                  <span>{content.phoneHours}</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>{content.officeMethod}</h4>
                  <p>{content.officeAddress}</p>
                  <span>{content.officeCity}</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <h4>{content.chatMethod}</h4>
                  <p>{content.chatAvailability}</p>
                  <span>{content.chatHours}</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
  <span>👍</span>
</a>
<a href="#" className="social-icon" aria-label="Twitter">
  <span>🌐</span>
</a>
<a href="#" className="social-icon" aria-label="LinkedIn">
  <span>🔗</span>
</a>
<a href="#" className="social-icon" aria-label="Instagram">
  <span>🎞️</span>
</a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3>{content.sendMessage}</h3>
            {submitStatus === 'success' && (
              <div className="success-message">
                <span>✅</span>
                <p>{content.messageSentSuccess}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{content.fullName}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder= {content.formNamePlaceholder}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{content.emailAddressLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder= {content.formEmailPlaceholder}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">{content.subjectLabel}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={content.formSubjectPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{content.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder= {content.formMessagePlaceholder}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="loading-spinner"></span>
                ) : (
                  content.sendButton
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq">
          <h3>{content.faqTitle}</h3>
          <div className="faq-preview">
            <p>{content.faqPreviewText}</p>
            <a href="/faq" className="faq-link">{content.viewAllFAQs}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 