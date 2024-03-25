import React from 'react';
import '../assets/styles/ContactUs.css'; // Import CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <textarea placeholder="Your Message" className="input-field textarea"></textarea>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
