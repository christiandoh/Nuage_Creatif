import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import FloatingIcons from './FloatingIcons';

const Hero = ({ scrollToSection }) => {
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current && !statsAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          animateStats();
          setStatsAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsAnimated]);

  const animateStats = () => {
    const targets = { projects: 30, clients: 30, experience: 4 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        experience: Math.floor(targets.experience * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targets);
      }
    }, stepDuration);
  };

  return (
    <section id="home" className="hero">
      {/* 3D Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://cdn.pixabay.com/video/2016/04/03/2656-865412758_large.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="animated-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hello, I'm William
            <span className="highlight">Designer & Creative</span>
          </h1>
          <p>
            Passionate about exceptional design and visual innovation, I transform your ideas 
            into unique and memorable visual creations. Each project is a new adventure 
            where creativity meets professionalism.
          </p>
          <p>
            From branding to UI/UX, I create visual experiences that tell your story 
            and leave a lasting impression on your audience.
          </p>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card glass">
              <span className="stat-number">{stats.projects}+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">{stats.clients}+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">{stats.experience}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('portfolio')}>
              Discover My Work
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary glass" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img 
              src="profile.jpg" 
              alt="William - Designer" 
              className="profile-image"
            />
          </div>
          <div className="mobile-floating-icons">
            <FloatingIcons />
          </div>
        </div>
      </div>

      <ScrollIndicator scrollToSection={scrollToSection} />
    </section>
  );
};

export default Hero;