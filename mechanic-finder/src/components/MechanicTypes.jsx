import React from "react";
import { ChevronDown, Search, Car, Wrench, Cog, Zap, Shield, Users, Gauge, Droplets } from 'lucide-react';
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
const Mechanicoptions = () => {
    return(
        <>
      {/* Browse by Type Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Type
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-6">
            {serviceTypes.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
              >
                <div className="text-gray-600 group-hover:text-blue-600 transition-colors mb-3">
                  {service.icon}
                </div>
                <span className="text-sm text-center text-gray-700 group-hover:text-gray-900 font-medium">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}
export default Mechanicoptions