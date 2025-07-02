import React from 'react';
import { Settings, Car } from 'lucide-react';

export default function MechanicServiceCards() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Looking for a Mechanic Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Are You Looking
            </h2>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              For a Mechanic ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are committed to providing our customers with exceptional service.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full">
              <Settings className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md">
            Get Started
          </button>
        </div>

        {/* Are you a Mechanic Card */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Are you a
            </h2>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Mechanic?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are committed to providing our customers with exceptional service.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full">
              <Car className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md">
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  );
}