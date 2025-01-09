import React, { forwardRef } from 'react';
import './AboutSidebar.css';  // Ensure the CSS file is named correctly

const AboutSidebar = forwardRef(({ isOpen }, ref) => {
  return (
    <div 
      className={`aboutSidebar ${isOpen ? 'active' : ''}`} 
      ref={ref}  // Attach the ref to the sidebar element
    >
      <p>Hi, my name is Kevin Vu!</p>
    </div>
  );
});

export default AboutSidebar;
