import React from 'react';
import { Settings, Car } from 'lucide-react';

const MechanicServiceCards = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Looking for Mechanic Section */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-12 lg:p-16 relative">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                  Are You Looking
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">
                  For a Mechanic?
                </h2>
                
                <p className="text-gray-600 text-base mb-10 leading-relaxed max-w-sm">
                  We are committed to providing our customers with exceptional service and connecting you with trusted professionals.
                </p>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-base hover:shadow-lg transform hover:-translate-y-1">
                  Get Started →
                </button>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Settings className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Are you a Mechanic Section */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-12 lg:p-16 relative">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                  Are you a
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">
                  Mechanic?
                </h2>
                
                <p className="text-gray-600 text-base mb-10 leading-relaxed max-w-sm">
                  Join our platform and connect with customers who need your expertise. Grow your business with us.
                </p>
                
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-base hover:shadow-lg transform hover:-translate-y-1">
                  Get Started →
                </button>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Car className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default MechanicServiceCards