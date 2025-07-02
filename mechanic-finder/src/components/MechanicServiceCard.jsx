import React from 'react';
import { Settings, Car } from 'lucide-react';

export default function MechanicServiceCards() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Looking for Mechanic Section */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-12 relative">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                  Are You Looking
                </h2>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                  For a Mechanic ?
                </h2>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  We are committed to providing our customers with exceptional service.
                </p>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm">
                  Get Started →
                </button>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Are you a Mechanic Section */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-12 relative">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                  Are you a
                </h2>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                  Mechanic?
                </h2>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  We are committed to providing our customers with exceptional service.
                </p>
                
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm">
                  Get Started →
                </button>
              </div>
              
              {/* Icon positioned in bottom right */}
              <div className="absolute bottom-8 right-8">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <Car className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}