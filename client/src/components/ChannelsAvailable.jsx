// src/components/ChannelsAvailable.jsx

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css'; // Don't forget to install this: npm install animate.css

const ChannelsAvailable = ({ content }) => {
  const channels = [
    {
      name: content.services[0].title,
      icon: 'bi-globe',
      color: '#0d6efd',
      link: '/public-form',
      isInternal: true,
    },
    {
      name: content.services[1].title,
      icon: 'bi-facebook',
      color: '#1877F2',
      link: 'https://www.facebook.com/profile.php?id=100090606769121&rdid=7gb6Lm7sTi4DKqJe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CNV8QysEA#',
    },
    {
      name: content.services[2].title,
      icon: 'bi-chat-dots',
      color: '#6f42c1',
      link: 'sms:+9779813440031',
    },
    {
      name: content.services[3].title,
      icon: 'bi-whatsapp',
      color: '#25D366',
      link: 'https://wa.me/9779813440031',
    },
  ];

  const handleClick = (channel) => {
    if (channel.isInternal) {
      window.location.href = channel.link;
    } else {
      window.open(channel.link, '_blank');
    }
  };

  return (
    <section className="channels-section py-5">
      <div className="container py-4">
        {/* Dynamic Title */}
        <h2 className="text-center display-5 fw-bold mb-5 animate__animated animate__fadeInUp">
          {content.servicesTitle}
        </h2>

        <div className="row justify-content-center g-4">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-3 d-flex justify-content-center animate__animated animate__zoomIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="channel-card card rounded-3 shadow-sm text-center border-0 p-4 w-100"
                style={{ cursor: 'pointer' }}
                onClick={() => handleClick(channel)}
              >
                <div className="card-body p-0 d-flex flex-column align-items-center">
                  <i
                    className={`bi ${channel.icon} channel-icon mb-3`}
                    style={{ fontSize: '3.5rem', color: channel.color }}
                  ></i>
                  <h5 className="card-title fw-semibold mt-auto">{channel.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsAvailable;