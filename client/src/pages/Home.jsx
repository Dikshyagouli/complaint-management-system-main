import React from 'react';
import About from '../components/About';
import ChannelsAvailable from '../components/ChannelsAvailable';
import ServiceSection from '../components/ServiceSection';

function Home({ mode, content }) {
  return (
    <div className="home-container">
      <About mode={mode} content={content} />
      <ServiceSection mode={mode} content={content} />
      <ChannelsAvailable mode={mode} content={content} />
    </div>
  );
}

export default Home;
