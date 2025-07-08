import React from 'react';

const TabNavigation = ({ currentPage, setCurrentPage }) => (
    <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
    <button
      onClick={() => setCurrentPage('login')}
      className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
        currentPage === 'login'
          ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
    >
      Sign In
    </button>
    <button
      onClick={() => setCurrentPage('register')}
      className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
        currentPage === 'register'
          ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      Sign Up
    </button>
    </div>
);




export default TabNavigation;