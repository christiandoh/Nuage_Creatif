import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Contact me to bring your creative projects to life</p>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <p>
            I'm always open to new collaborations and creative opportunities. 
            Don't hesitate to contact me to discuss your needs and ambitions.
          </p>
        </div>

        <div className="contact-methods">
          <a href="https://wa.me/2250503729340" className="contact-method glass" target="_blank" rel="noopener noreferrer">
            <div className="method-icon">
              <MessageCircle size={24} />
            </div>
            <div className="method-info">
              <div className="method-label">WhatsApp</div>
              <div className="method-value">+225 05 03 72 93 40</div>
            </div>
          </a>

          <a href="mailto:koffi.troh@gmail.com" className="contact-method glass">
            <div className="method-icon">
              <Mail size={24} />
            </div>
            <div className="method-info">
              <div className="method-label">Email</div>
              <div className="method-value">koffi.troh@gmail.com</div>
            </div>
          </a>

          <a href="tel:+2250503729340" className="contact-method glass">
            <div className="method-icon">
              <Phone size={24} />
            </div>
            <div className="method-info">
              <div className="method-label">Phone</div>
              <div className="method-value">+225 05 03 72 93 40</div>
            </div>
          </a>

          <div className="contact-method glass">
            <div className="method-icon">
              <MapPin size={24} />
            </div>
            <div className="method-info">
              <div className="method-label">Location</div>
              <div className="method-value">Abidjan, Côte d'Ivoire</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="availability-badge">
            <div className="status-dot"></div>
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;