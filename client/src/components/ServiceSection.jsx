// src/components/ServiceSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css'; // Don't forget to install this: npm install animate.css

const ServiceSection = ({ content }) => {
  const services = [
    {
      title: content.service1Title,
      description: content.service1Description,
      image: "./submit.png",
      link: "/public-form"
    },
    {
      title: content.service2Title,
      description: content.service2Description,
      image: "./track.png",
      link: "/track"
    },
    {
      title: content.service3Title,
      description: content.service3Description,
      image: "./faq.png",
      link: "/faq"
    },
    {
      title: content.service4Title,
      description: content.service4Description,
      image: "./admin.png",
      link: "/admin"
    },
  ];

  return (
    <section className="service-section-dark py-5">
      <div className="container py-4">
        <div className="text-center animate__animated animate__fadeInUp">
          <h2 className="display-4 fw-bold text-white">{content.ourServices}</h2>
        </div>

        <div className="row justify-content-center g-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="col-12 col-md-6 col-lg-3 d-flex animate__animated animate__fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Link to={service.link} className="text-decoration-none w-100">
                <div className="service-card h-100 text-center rounded-3 shadow-lg hover-lift p-4 d-flex flex-column">
                  <div className="mb-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid service-card-image"
                      style={{ height: '100px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title fw-bold text-dark">{service.title}</h5>
                    <p className="card-text text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
