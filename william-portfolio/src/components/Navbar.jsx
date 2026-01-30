import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection, theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Theme Switcher */}
      <div className="theme-switcher">
        <button
          className={`theme-btn glass ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          title="Light Mode"
        >
          <Sun size={20} />
        </button>
        <button
          className={`theme-btn glass ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          title="Dark Mode"
        >
          <Moon size={20} />
        </button>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className={`navbar-content ${scrolled ? 'glass' : ''}`} style={{ borderRadius: scrolled ? '16px' : '0' }}>
          <div className="navbar-brand">Nuage creatif</div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          <ul className={`nav-menu glass ${mobileMenuOpen ? 'active' : ''}`}>
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: User },
              { id: 'services', label: 'Services', icon: Briefcase },
              { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
              { id: 'contact', label: 'Contact', icon: Mail }
            ].map(section => {
              const Icon = section.icon;
              return (
                <li key={section.id}>
                  <span
                    className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => {
                      scrollToSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="nav-icon" size={20} />
                    <span className="nav-text">{section.label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;