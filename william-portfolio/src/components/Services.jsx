import React from 'react';
import { Palette, Code, Package, Image, PenTool, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette, // React component stored directly
      title: 'Visual Identity',
      description: 'Complete brand identity creation: logo, graphic charter, and variations.',
      features: ['Logo & Variations', 'Graphic Charter', 'Brand Guidelines', 'Communication Materials']
    },
    {
      icon: Code, // React component stored directly
      title: 'UI/UX Design',
      description: 'Intuitive and aesthetic interface design for web and mobile.',
      features: ['Wireframing & Prototyping', 'Interface Design', 'Design System', 'User Testing']
    },
    {
      icon: Package, // React component stored directly
      title: 'Packaging Design',
      description: 'Creative and impactful packaging design that enhances your products.',
      features: ['Structural Design', 'Graphic Dressing', '3D Mockups', 'Product Variations']
    },
    {
      icon: Image, // React component stored directly
      title: 'Advertising Design',
      description: 'Striking advertising visuals for all media: print and digital.',
      features: ['Posters & Flyers', 'Web Banners', 'Social Media', '360° Campaigns']
    },
    {
      icon: PenTool,
      title: 'Illustration',
      description: 'Original and personalized illustrations with a unique style.',
      features: ['Editorial Illustration', 'Character Design', 'Digital Illustrations', 'Custom Iconography']
    },
    {
      icon: Video,
      title: 'Motion Design',
      description: 'Dynamic graphic animations and explanatory videos.',
      features: ['Logo Animations', 'Explainer Videos', 'Animated GIFs', 'Transitions & Effects']
    }
  ];

  return (
    <section id="services">
      <div className="section-header">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">Tailored creative solutions for all your needs</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon; // Assign the component to a variable
          return (
            <div key={index} className="service-card glass">
              <div className="service-icon">
                <Icon size={28} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;