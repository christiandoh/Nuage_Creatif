import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = ({ scrollToSection }) => {
  return (
    <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
      <div className="scroll-indicator-wrapper">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <ChevronDown className="scroll-arrow" size={24} />
      </div>
      <span className="scroll-text">Scroll to explore</span>
    </div>
  );
};

export default ScrollIndicator;
