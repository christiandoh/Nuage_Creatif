import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      category: 'Branding',
      title: 'Tech Startup Visual Identity',
      description: 'Modern brand identity creation for a technology startup.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      category: 'UI/UX',
      title: 'E-commerce Mobile App',
      description: 'Intuitive interface design for online shopping application.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
      category: 'Packaging',
      title: 'Cosmetics Product Line',
      description: 'Luxurious and eco-friendly packaging for natural cosmetics.'
    },
    {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      category: 'Advertising',
      title: '360° Event Campaign',
      description: 'Impactful visuals for multi-platform campaign.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      category: 'Web Design',
      title: 'Contemporary Artist Portfolio',
      description: 'Clean and sophisticated portfolio website.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      category: 'Branding',
      title: 'Gourmet Restaurant',
      description: 'Refined identity for high-end restaurant.'
    }
  ];

  return (
    <section id="portfolio">
      <div className="section-header">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">Discover my latest creations and achievements</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;