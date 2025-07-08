import React from 'react';
import { User } from 'lucide-react';

const PageHeader = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <User className="w-16 h-16 text-white" />
    </div>
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
);

export default PageHeader;