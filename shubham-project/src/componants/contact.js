// Footer.js
import React from 'react';
import'./contact.css';

function Footer() {
  const companyName = "Tech Solutions"; // Replace with your company name

  return (
    <footer className="footer">
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>For any inquiries, feel free to reach out to us:</p>
        <ul>
          <li>Mobile: 9309090925</li>
          <li>Email: shubham25104@gmail.com</li>
        </ul>
      </div>

      <div className="social-media-section">
        <h2>Connect With Us</h2>
        <ul>
          <li><a href="https://www.instagram.com/ashu25104/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/shubham-sharma-29353b226/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <div className="website-section">
        <h2>Visit Our Website</h2>
        <p><a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">www.yourwebsite.com</a></p>
      </div>
      
      <div className="company-info">
        <h2>{companyName}</h2>
        <p>123 Company Street</p>
        <p>City, Country</p>
      </div>
    </footer>
  );
}

export default Footer;
