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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Find Your Specialist
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert mechanics for every vehicle type and service need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {serviceTypes.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Link to='/listing'>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {React.cloneElement(service.icon, { className: "w-9 h-9" })}
                </div>
                </Link>
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                  {service.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg text-lg font-semibold rounded-xl text-slate-700 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            View All Services
            <ChevronDown className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MechanicTypes;