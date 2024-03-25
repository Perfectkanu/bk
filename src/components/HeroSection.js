import React from 'react';
import '../assets/styles/HeroSection.css'; // Import CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Our Delivery Site</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet urna vitae nisi
          fringilla, at varius nunc fermentum. Nullam quis velit justo.
        </p>
      </div>
      <div className="hero-image-container">
        <img src="/images/delivery-hero-image.jpg" alt="Delivery Truck" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
