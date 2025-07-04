import React, { useState } from 'react';
import { Search, Phone, Star, MapPin, Filter, User, Menu, X, ChevronLeft, Plus, Minus, Clock, Award, Shield } from 'lucide-react';
import FilterModal from '../features/ListingFilter';

 function MechanicsFinder() {
  const [selectedBusiness, setSelectedBusiness] = useState(0);
  const [showMap, setShowMap] = useState(false);
  
  const businesses = [
    {
      id: 1,
      name: "Momo Auto",
      rating: 4.8,
      reviews: 1271,
      address: "1425 Oak Street, Downtown",
      phone: "(500) 032-3456",
      services: ["Transmissions", "Brake Repair", "Engine Diagnostics", "Radiators"],
      image: "shop.jpg",
      status: "Open",
      verified: true,
      responseTime: "Usually responds within 2 hours",
      price: "$$",
      yearsInBusiness: 12
    },
  ];
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm z-20 border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-lg font-bold text-gray-900">MechanicFinder</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">John Doe</span>
              <span className="text-blue-600 text-sm">+1 (500) 657 8978</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full pt-16 px-4">
        <div className={`w-full lg:w-2/5 bg-white ${showMap ? 'hidden lg:block' : 'block'} border-r border-gray-200 mr-4`}>
          <div className="p-4">
            {/* Search Section */}
            <div className="mb-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Johannesburg"
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              
              {/* Filter Row */}
              <div className="flex items-center space-x-3 mb-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                  Free consultation
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  Price
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  Instant Book
                </button>
                <button className="p-2 bg-gray-100 rounded-lg">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                301 General auto mechanics
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Mechanics</h2>
            </div>
          </div>

          {/* Business Listings */}
          <div className="overflow-y-auto px-4" style={{ height: 'calc(100vh - 240px)' }}>
            {businesses.map((business, index) => (
              <div
                key={business.id}
                className={`p-4 mb-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors shadow-sm ${
                  selectedBusiness === index ? 'bg-blue-50 border-blue-600 shadow-md' : ''
                }`}
                onClick={() => setSelectedBusiness(index)}
              >
                <div className="flex space-x-4">
                  <div className="relative">
                    <img
                      src="/api/placeholder/120/80"
                      alt={business.name}
                      className="w-32 h-20 object-cover rounded-lg"
                    />
                    {business.verified && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{business.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{business.rating}</span>
                        <span className="text-gray-500 ml-1">({business.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{business.address}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {business.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{business.phone}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium ml-auto">
                        {business.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-3 flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Book Appointment
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Map */}
        
      </div>

      {/* Mobile Toggle Button */}
     
      {/* Filter Modal */}
      <FilterModal/>
    </div>
  );
}
export default MechanicsFinder