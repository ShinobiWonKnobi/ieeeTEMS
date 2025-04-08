import React from 'react';

// Helper component to render SVG icons from path data
const IconRenderer = ({ pathData, className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={pathData} />
  </svg>
);

export default IconRenderer; 