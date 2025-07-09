import React from 'react';
import { Settings, Car } from 'lucide-react';

const MechanicServiceCards = ({ isAuthenticated, userInfo }) => {
  // Content for logged out users (call-to-action)
  const loggedOutContent = {
    customer: {
      title: ["Looking for a", "Mechanic?"],
      description: "Connect with trusted, certified mechanics in your area. Quality service guaranteed.",
      buttonText: "Find Mechanics →"
    },
    mechanic: {
      title: ["Are you a", "Mechanic?"],
      description: "Join our platform and grow your business. Connect with customers who value quality.",
      buttonText: "Join Platform →"
    }
  };

  // Content for logged in users (informational/navigation)
  const loggedInContent = {
    customer: {
      title: ["Browse", "Mechanics"],
      description: "Explore our network of verified mechanics. Find the perfect match for your vehicle needs.",
      buttonText: "Browse Services →"
    },
    mechanic: {
      title: ["Your", "Dashboard"],
      description: "Manage your business profile, view bookings, and connect with customers seamlessly.",
      buttonText: "View Dashboard →"
    }
  };

  // Determine which content to show
  const content = isAuthenticated ? loggedInContent : loggedOutContent;

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Customer/Looking for Mechanic Section */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                    {content.customer.title[0]}
                  </h2>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {content.customer.title[1]}
                  </h2>
                </div>
                
                <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-md">
                  {content.customer.description}
                </p>
                
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                  {content.customer.buttonText}
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/10 rounded-full items-center justify-center backdrop-blur-sm hidden sm:flex">
                <Settings className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/80" />
              </div>
            </div>

            {/* Mechanic Section */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                    {content.mechanic.title[0]}
                  </h2>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {content.mechanic.title[1]}
                  </h2>
                </div>
                
                <p className="text-slate-200 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-md">
                  {content.mechanic.description}
                </p>
                
                <button className="bg-white text-slate-700 hover:bg-slate-50 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                  {content.mechanic.buttonText}
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/10 rounded-full items-center justify-center backdrop-blur-sm hidden sm:flex">
                <Car className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicServiceCards;