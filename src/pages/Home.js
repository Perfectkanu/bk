import React from 'react';
import '../components/HeroSection'
import HeroSection from '../components/HeroSection';
import Sections from '../components/Sections';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div>
      <HeroSection/>
      <Sections/>
      <ContactUs/>
    </div>
  );
}

export default Home;
