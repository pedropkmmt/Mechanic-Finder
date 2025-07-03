import React from 'react';
import { Settings, Car } from 'lucide-react';

const MechanicServiceCards = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Looking for Mechanic Section */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    Looking for a
                  </h2>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    Mechanic?
                  </h2>
                </div>
                
                <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
                  Connect with trusted, certified mechanics in your area. Quality service guaranteed.
                </p>
                
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg hover:shadow-xl transform hover:scale-105">
                  Find Mechanics →
                </button>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Settings className="w-16 h-16 text-white/80" />
              </div>
            </div>

            {/* Are you a Mechanic Section */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    Are you a
                  </h2>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    Mechanic?
                  </h2>
                </div>
                
                <p className="text-slate-200 text-lg mb-8 leading-relaxed max-w-md">
                  Join our platform and grow your business. Connect with customers who value quality.
                </p>
                
                <button className="bg-white text-slate-700 hover:bg-slate-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg hover:shadow-xl transform hover:scale-105">
                  Join Platform →
                </button>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Car className="w-16 h-16 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicServiceCards;