import React from "react";
import { ChevronDown, Search, Car, Wrench, Cog, Zap, Shield, Users, Gauge, Droplets } from 'lucide-react';

const MechanicTypes = () => {
  const serviceTypes = [
    { icon: <Car className="w-8 h-8" />, label: 'Brakes' },
    { icon: <Wrench className="w-8 h-8" />, label: 'General mechanic' },
    { icon: <Cog className="w-8 h-8" />, label: 'Diesel mechanic' },
    { icon: <Zap className="w-8 h-8" />, label: 'Engine mechanic' },
    { icon: <Shield className="w-8 h-8" />, label: 'Brake and Suspension Specialists' },
    { icon: <Gauge className="w-8 h-8" />, label: 'Tyre Technicians' },
    { icon: <Droplets className="w-8 h-8" />, label: 'Heavy Vehicle mechanics' },
    { icon: <Users className="w-8 h-8" />, label: 'Trucking and Paving Workers' },
    { icon: <Wrench className="w-8 h-8" />, label: 'Auto glass mechanics' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Browse by Type
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {serviceTypes.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 cursor-pointer transition-all duration-200 group border border-gray-200 hover:border-gray-300 hover:shadow-md"
            >
              <div className="text-gray-600 group-hover:text-blue-600 transition-colors mb-4">
                {service.icon}
              </div>
              <span className="text-sm text-center text-gray-700 group-hover:text-gray-900 font-medium leading-tight">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanicTypes