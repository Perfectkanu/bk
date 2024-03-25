import React from 'react';
import '../assets/styles/Section.css'; // Import CSS file for styling

const Sections = () => {
  return (
    <div className="sections-container">
      <div className="services-section">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet urna vitae nisi
          fringilla, at varius nunc fermentum. Nullam quis velit justo.
        </p>
      </div>
      <div className="about-section">
        <h2 className="section-heading">About Us</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet urna vitae nisi
          fringilla, at varius nunc fermentum. Nullam quis velit justo.
        </p>
      </div>
    </div>
  );
};

export default Sections;
