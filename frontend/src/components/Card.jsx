import React from 'react';
import { useApp } from '../context/AppContext';
import './components.css';

const Card = ({ 
  title, 
  subtitle = null,
  titleTag = 'h3',
  children, 
  className = '', 
  variant = 'default', 
  withGlow = false,
  withCircuit = false,
  withAnimation = false,
  headerAccent = false,
  footer = null,
  onClick = null,
  ariaLabel = '',
  contentPadding = 'normal',
  elevation = 'md',
  fullHeight = false,
  dataTestId = ''
}) => {
  const { theme } = useApp();
  const TitleTag = titleTag;
  
  // Use CSS component classes instead of inline utility classes
  const getCardClasses = () => {
    // Base class
    const classes = ['card'];
    
    // Add variant class
    switch(variant) {
      case 'outlined':
        classes.push(theme === 'dark' ? 'card-dark border-primary-400/30' : 'card-light border-primary-200');
        break;
      case 'glass':
        classes.push('card-glass');
        break;
      case 'elevated':
        classes.push(theme === 'dark' ? 'card-dark shadow-lg' : 'card-light shadow-lg');
        break;
      case 'minimal':
        classes.push(theme === 'dark' ? 'card-dark bg-transparent' : 'card-light bg-transparent');
        break;
      case 'accent':
        classes.push(theme === 'dark' ? 'card-dark border-l-4 border-l-accent-500' : 'card-light border-l-4 border-l-accent-500');
        break;
      default:
        classes.push(theme === 'dark' ? 'card-dark' : 'card-light');
    }
    
    // Add shadow elevation
    if (elevation !== 'none') {
      classes.push(`shadow-${elevation}`);
    }
    
    // Add special effects
    if (withGlow) classes.push('animate-glow');
    if (withCircuit) classes.push('circuit-card');
    if (withAnimation) classes.push('animate-slide-up');
    if (fullHeight) classes.push('h-full flex flex-col');
    
    // Add interactive behavior
    if (onClick) classes.push('card-interactive focus-ring');
    
    // Add custom classes
    if (className) classes.push(className);
    
    return classes.filter(Boolean).join(' ');
  };
  
  // Get content padding using CSS component classes
  const getContentClass = () => {
    switch(contentPadding) {
      case 'none': return 'card-body p-0';
      case 'sm': return 'card-body card-compact';
      case 'lg': return 'card-body card-spacious';
      case 'xl': return 'card-body p-10';
      default: return 'card-body';
    }
  };
  
  // Get header class
  const getHeaderClass = () => {
    return `card-header ${headerAccent ? 'border-b-2 border-accent-500' : ''}`;
  };
  
  // Get footer class
  const getFooterClass = () => {
    return 'card-footer';
  };
  
  // Handle click event - for accessibility, allowing keyboard activation
  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e);
    }
  };
  
  return (
    <div 
      className={getCardClasses()} 
      onClick={onClick} 
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={ariaLabel || title || undefined}
      data-test-id={dataTestId || undefined}
    >
      {title && (
        <div className={getHeaderClass()}>
          <TitleTag className="text-xl font-heading mb-1 text-secondary-500">{title}</TitleTag>
          {subtitle && <p className="text-sm text-light-600 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className={`${getContentClass()} relative z-10 ${fullHeight ? 'flex-grow' : ''}`}>
        {children}
      </div>
      {footer && (
        <div className={getFooterClass()}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 