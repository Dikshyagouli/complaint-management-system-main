// src/components/About.jsx

import React from 'react';
import complaintImage from '../assets/complaint.png';
import 'animate.css'; // Don't forget to install this: npm install animate.css

function About({ content }) {
  return (
    <section className="about-section ">
      <div className="container ">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0 animate__animated animate__fadeInLeft">
            <h1 className="fw-bold display-4 mb-3">{content.title}</h1>
            <p className="lead fs-5 mb-4 text-muted">
              {content.paragraph}
            </p>
            <div>
              <button 
                className="btn btn-primary btn-lg me-3 px-5 py-3 shadow-lg hover-lift" 
                type="button"
              >
                {content.moreDetails}
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center animate__animated animate__fadeInRight">
            <img
              src={complaintImage}
              alt="Complaint Illustration"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;