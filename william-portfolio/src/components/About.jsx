import React from 'react';
import { Lightbulb, Palette, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Graphic Design', percentage: 95 },
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Branding & Identity', percentage: 88 },
    { name: 'Creative Illustration', percentage: 85 },
    { name: 'Motion Design', percentage: 82 }
  ];

  return (
    <section id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My journey, vision, and skills</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Passionate Designer & Innovative Creative</h3>
          <p>
            For several years, I've been putting my creative expertise at the service of ambitious 
            brands to create strong, consistent, and memorable visual identities.
          </p>
          <p>
            My unique approach combines modern aesthetics with effective communication strategy. 
            I firmly believe that design goes beyond aesthetics – it tells a story, creates 
            emotions, and builds lasting connections.
          </p>
          <p>
            Each project is a new adventure where creativity meets professionalism, 
            innovation meets authenticity. I'm committed to transforming your vision 
            into exceptional visual reality.
          </p>

          <div className="values-list">
            <div className="value-item glass">
              <Lightbulb size={24} style={{ color: 'var(--accent-light)' }} />
              <span>Continuous Innovation</span>
            </div>
            <div className="value-item glass">
              <Palette size={24} style={{ color: 'var(--accent-light)' }} />
              <span>Limitless Creativity</span>
            </div>
            <div className="value-item glass">
              <Heart size={24} style={{ color: 'var(--accent-light)' }} />
              <span>Authentic Passion</span>
            </div>
          </div>
        </div>

        <div className="about-skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar glass">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;