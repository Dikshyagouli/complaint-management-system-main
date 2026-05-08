import React, { useState } from 'react';

const FAQ = ({ content }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="form-page-container">
      <div className="form-content">
        <h2>{content.faqTitle}</h2>
        <p className="faq-intro">
          {content.faqIntro}
        </p>

        <div className="faq-container">
          {content.faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${openItem === item.id ? 'active' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {openItem === item.id ? '−' : '+'}
                </span>
              </button>
              <div className={`faq-answer ${openItem === item.id ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>{content.questionsTitle}</h3>
          <p>
            {content.questionsTitle}
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h4>{content.emailSupport}</h4>
                <p>{content.emailAddress}</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">📞</span>
              <div>
                <h4>{content.phoneSupport}</h4>
                <p>{content.phoneNumber}</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">💬</span>
              <div>
                <h4>{content.liveChat}</h4>
                <p>{content.chatHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-categories">
          <h3>{content.quickLinksTitle}</h3>
          <div className="category-links">
            <a href="/form" className="category-link">{content.submitComplaint}</a>
            <a href="/track" className="category-link">{content.trackComplaint}</a>
            <a href="/about" className="category-link">{content.aboutSystem}</a>
            <a href="/services" className="category-link">{content.ourServices}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 