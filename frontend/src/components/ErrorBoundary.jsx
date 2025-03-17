import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './components.css';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    resetErrorBoundary();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-500 p-4">
      <div className="card card-glass p-6 max-w-lg w-full" role="alert">
        <h2 className="text-2xl font-heading text-accent-500 mb-4">Something went wrong</h2>
        
        <div className="bg-primary-600/50 p-4 rounded-md mb-6 overflow-auto max-h-48">
          <p className="font-mono text-sm text-light-500/90">{error.message}</p>
        </div>
        
        <p className="text-light-400 mb-6">
          We apologize for the inconvenience. The error has been logged and we'll look into it.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={resetErrorBoundary}>Try again</Button>
          <Button variant="secondary" onClick={handleGoHome}>Go to homepage</Button>
        </div>
      </div>
    </div>
  );
};

const logError = (error, info) => {
  // In a real app, this would send the error to a logging service
  console.error('Caught an error:', error, info);
};

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={() => {
        // Reset application state here if needed
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary; 