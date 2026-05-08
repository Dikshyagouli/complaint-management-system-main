// src/components/About.jsx

import React from 'react';
import 'animate.css'; // For animations
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons

const About = ({ content }) => {
  return (
    <div className="about-page">
      {/* Hero Header Section */}
     <section 
        className="about-hero text-white text-center py-4 mb-5 animate__animated animate__fadeIn"
        style={{
          background: 'linear-gradient(135deg, #0d6efd, #004d9c)',
        }}
      >
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">{content.aboutTitle}</h1>
          <p className="lead px-4 mx-auto" style={{ maxWidth: '700px' }}>
            {content.aboutSubtitle}
          </p>
        </div>
      </section>

      <main className="container my-5">
        <div className="row g-5">
          {/* Main Content Column */}
          <div className="col-lg-8">
            {/* Our Mission Section */}
            <div className="card about-card shadow-sm mb-5 p-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="card-body">
                <h3 className="card-title fw-bold text-primary mb-3"><i className="bi bi-bullseye me-2"></i>{content.ourMissionTitle}</h3>
                <p className="card-text text-muted">
                  {content.ourMissionText}
                </p>
              </div>
            </div>

            {/* What We Do Section */}
            <div className="card about-card shadow-sm mb-5 p-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="card-body">
                <h3 className="card-title fw-bold text-primary mb-3"><i className="bi bi-lightbulb-fill me-2"></i>{content.whatWeDoTitle}</h3>
                <p className="card-text text-muted">
                  {content.whatWeDoText}
                </p>
                <ul className="list-unstyled space-y-2 mt-4">
                  {content.whatWeDoList.map((item, index) => (
                    <li key={index} className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Values Section */}
            <div className="p-4 bg-light rounded-3 shadow-sm animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-primary fw-bold text-center mb-4">{content.ourValuesTitle}</h3>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {content.values.map((value, index) => (
                  <div key={index} className="col">
                    <div className="card value-card h-100 p-3 shadow-sm border-0 animate__animated animate__zoomIn" style={{ animationDelay: `${index * 0.1 + 0.8}s` }}>
                      <div className="card-body">
                        <h4 className="card-title fw-semibold text-dark">{value.title}</h4>
                        <p className="card-text text-muted">{value.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (Image & Contact Info) */}
          <div className="col-lg-4">
            {/* Image Container */}
            <div className="about-image-card shadow-lg mb-5 animate__animated animate__fadeInRight">
              <img
                src="/src/assets/forabout.png"
                alt="Complaint Management System"
                className="img-fluid rounded-3"
              />
            </div>

            {/* Contact Info Section */}
            <div className="card about-card shadow-sm p-4 animate__animated animate__fadeInRight" style={{ animationDelay: '0.4s' }}>
              <h3 className="card-title fw-bold text-primary mb-3"><i className="bi bi-person-lines-fill me-2"></i>{content.contactInfoTitle}</h3>
              <div className="contact-info text-muted space-y-2">
                <p className="mb-1"><i className="bi bi-envelope me-2 text-primary"></i><strong>{content.contactEmail}</strong> {content.emailAddress}</p>
                <p className="mb-1"><i className="bi bi-telephone me-2 text-primary"></i><strong>{content.contactPhone}</strong> {content.phoneNumber}</p>
                <p className="mb-1"><i className="bi bi-geo-alt me-2 text-primary"></i><strong>{content.contactAddress}</strong> {content.address}</p>
                <p className="mb-1"><i className="bi bi-clock me-2 text-primary"></i><strong>{content.contactHours}</strong> {content.hoursText}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;