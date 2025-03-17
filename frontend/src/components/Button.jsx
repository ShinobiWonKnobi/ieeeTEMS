import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  to = null,
  href = null,
  disabled = false,
  fullWidth = false,
  withGlow = false,
  elevate = false,
  loading = false,
  ariaLabel = '',
  icon = null,
  iconPosition = 'left',
  onClick = null,
  ...props 
}) => {
  // Build class list from component classes rather than utility classes
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full',
    disabled && 'btn-disabled',
    withGlow && 'btn-with-glow',
    elevate && 'btn-elevate',
    loading && 'btn-loading',
    className
  ].filter(Boolean).join(' ');
  
  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'} ${loading ? 'opacity-0' : ''}`} aria-hidden="true">
        {icon}
      </span>
    );
  };
  
  // Loading spinner
  const renderLoadingSpinner = () => {
    if (!loading) return null;
    return (
      <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
    );
  };
  
  // Common props including improved accessibility
  const commonProps = {
    className: classes,
    'aria-disabled': disabled,
    'aria-label': ariaLabel || undefined,
    'aria-busy': loading,
    onClick: disabled ? (e) => e.preventDefault() : onClick,
    ...props
  };
  
  // Add mobile-friendly touch target size
  if (size === 'xs' || size === 'sm') {
    commonProps.className += ' touch-target';
  }
  
  // Render as Link if 'to' prop is provided (internal link)
  if (to) {
    return (
      <Link 
        to={to} 
        {...commonProps}
        tabIndex={disabled ? -1 : 0}
      >
        {iconPosition === 'left' && renderIcon()}
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
        {iconPosition === 'right' && renderIcon()}
        {renderLoadingSpinner()}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided (external link)
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...commonProps}
        tabIndex={disabled ? -1 : 0}
      >
        {iconPosition === 'left' && renderIcon()}
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
        {iconPosition === 'right' && renderIcon()}
        {renderLoadingSpinner()}
      </a>
    );
  }
  
  // Render as button by default
  return (
    <button 
      type="button"
      disabled={disabled || loading} 
      {...commonProps}
    >
      {iconPosition === 'left' && renderIcon()}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {iconPosition === 'right' && renderIcon()}
      {renderLoadingSpinner()}
    </button>
  );
};

export default Button; 