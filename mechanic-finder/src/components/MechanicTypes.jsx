import React from "react";
import { ChevronDown, Search, Car, Wrench, Cog, Zap, Shield, Users, Gauge, Droplets } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'

const MechanicTypes = () => {
  const serviceTypes = [
    { icon: <Car className="w-8 h-8" />, label: 'Brake Specialists' , Link: '/listing'},
    { icon: <Wrench className="w-8 h-8" />, label: 'General Mechanics' },
    { icon: <Cog className="w-8 h-8" />, label: 'Diesel Specialists' },
    { icon: <Zap className="w-8 h-8" />, label: 'Engine Experts' },
    { icon: <Shield className="w-8 h-8" />, label: 'Suspension Pros' },
    { icon: <Gauge className="w-8 h-8" />, label: 'Tire Technicians' },
    { icon: <Droplets className="w-8 h-8" />, label: 'Heavy Vehicle' },
    { icon: <Users className="w-8 h-8" />, label: 'Fleet Services' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            Find Your Specialist
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Expert mechanics for every vehicle type and service need
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {serviceTypes.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 hover:border-blue-200 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4">
                <Link to='/listing'>
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {React.cloneElement(service.icon, { 
                    className: "w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" 
                  })}
                </div>
                </Link>
                <h3 className="text-xs sm:text-sm md:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight px-1">
                  {service.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg text-sm sm:text-base md:text-lg font-semibold rounded-xl text-slate-700 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            View All Services
            <ChevronDown className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MechanicTypes;