import React from 'react';
import { Sparkles, Heart, Palette, Image, Mail } from 'lucide-react';

const FloatingNav = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', icon: Sparkles },
    { id: 'about', icon: Heart },
    { id: 'services', icon: Palette },
    { id: 'portfolio', icon: Image },
    { id: 'contact', icon: Mail }
  ];

  return (
    <div className="floating-nav glass">
      {navItems.map(item => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`floating-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            style={{
              background: activeSection === item.id
                ? 'linear-gradient(135deg, #6366f1, #ec4899)'
                : 'rgba(99, 102, 241, 0.2)'
            }}
          >
            <Icon size={20} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingNav;