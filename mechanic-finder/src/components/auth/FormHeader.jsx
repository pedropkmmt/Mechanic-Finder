import React from 'react';

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-center">
    <h1 className="text-2xl font-semibold mb-2">{title}</h1>
    <p className="opacity-90 text-sm">{subtitle}</p>
  </div>
);

export default PageHeader;