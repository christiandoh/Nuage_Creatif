import React from 'react';
import { MessageCircle, Linkedin, Instagram } from 'lucide-react';

const SocialButtons = () => {
  return (
    <div className="social-float">
      {/* WhatsApp */}
      <a
        href="https://wa.me/2250503729340"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="social-btn whatsapp"
      >
        <MessageCircle size={26} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ton-profil"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="social-btn linkedin"
      >
        <Linkedin size={26} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ton-profil"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-btn instagram"
      >
        <Instagram size={26} />
      </a>
    </div>
  );
};

export default SocialButtons;
