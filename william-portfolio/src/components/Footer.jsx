import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>William</h3>
          <p>Designer & Creative</p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Let's transform your dreams into visual reality
          </p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a onClick={() => scrollToSection('services')}>Visual Identity</a></li>
            <li><a onClick={() => scrollToSection('services')}>UI/UX Design</a></li>
            <li><a onClick={() => scrollToSection('services')}>Packaging</a></li>
            <li><a onClick={() => scrollToSection('services')}>Illustration</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link glass">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link glass">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link glass">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/2250503729340" target="_blank" rel="noopener noreferrer" className="social-link glass">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 comcepteur doh lah nundo christian +225 0103961828</p>
      </div>
    </footer>
  );
};

export default Footer;