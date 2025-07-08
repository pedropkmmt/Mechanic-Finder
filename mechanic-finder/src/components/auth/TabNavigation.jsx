import React from 'react';

const TabNavigation = ({ currentPage, setCurrentPage }) => (
  <div className="flex mb-8 bg-secondary rounded-lg p-1">
    <button
      onClick={() => setCurrentPage('login')}
      className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
        currentPage === 'login'
          ? 'bg-card text-blue-primary shadow-sm border-1'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      Sign In
    </button>
    <button
      onClick={() => setCurrentPage('register')}
      className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
        currentPage === 'register'
          ? 'bg-card text-blue-primary shadow-sm border-1'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      Sign Up
    </button>
  </div>
);

export default TabNavigation;