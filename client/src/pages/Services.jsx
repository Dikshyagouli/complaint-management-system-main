import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ content }) => {
  const services = [
    {
      id: 'submit-complaint',
      title: content.submitComplaintTitle,
      description: content.submitComplaintDesc,
      icon: '📝',
      link: '/form'
    },
    {
      id: 'track-progress',
      title: content.trackProgressTitle,
      description: content.trackProgressDesc,
      icon: '📊',
      link: '/track'
    },
    {
      id: 'faq',
      title: content.faqTitle,
      description: content.faqDesc,
      icon: '❓',
      link: '/faq'
    }
  ];

  return (
    <div className="form-page-container">
      <div className="form-content">
        <h2>{content.ourServices}</h2>
        <p className="services-intro">
          {content.servicesIntroduction}
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                {content.learnMore}
              </Link>
            </div>
          ))}
        </div>

        <div className="services-info">
          <h3>{content.whyChooseTitle}</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <div>
                <h4>{content.fastResponseTitle}</h4>
                <p>{content.fastResponseDesc}</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔒</span>
              <div>
                <h4>{content.secureTitle}</h4>
                <p>{content.secureDesc}</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📱</span>
              <div>
                <h4>{content.multiChannelTitle}</h4>
                <p>{content.multiChannelDesc}</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📈</span>
              <div>
                <h4>{content.realtimeTitle}</h4>
                <p>{content.realtimeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 