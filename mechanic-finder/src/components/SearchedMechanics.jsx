import React, { useState } from 'react';
import { Star, MapPin, Eye } from 'lucide-react';

const SimpleMechanicSearch = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'BMW', 'Toyota', 'Ford'];
  
  const mechanics = [
    {
      id: 1,
      name: 'AutoFix Pro',
      rating: 4.8,
      reviews: 127,
      distance: '2.4 km',
      specialties: ['BMW', 'Mercedes', 'Audi'],
      available: true,
      image: 'shop.jpg'
    },
    {
      id: 2,
      name: 'Quick Service',
      rating: 4.9,
      reviews: 89,
      distance: '1.8 km',
      specialties: ['Toyota', 'Honda', 'Nissan'],
      available: true,
      image: 'shop.jpg'
    },
    {
      id: 3,
      name: 'Elite Motors',
      rating: 4.7,
      reviews: 156,
      distance: '3.2 km',
      specialties: ['Ford', 'Chevrolet', 'Hundai'],
      available: false,
      image: 'shop.jpg'
    },
    {
      id: 4,
      name: 'Precision Auto',
      rating: 4.6,
      reviews: 94,
      distance: '4.1 km',
      specialties: ['Toyota', 'Volkswagen', 'Audi'],
      available: true,
      image: 'shop.jpg'
    }
  ];

  const filteredMechanics = activeFilter === 'All' 
    ? mechanics 
    : mechanics.filter(mechanic => 
        mechanic.specialties.some(specialty => 
          specialty.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Local Mechanics
          </h1>
          <p className="text-gray-600">
            Trusted automotive professionals in your area
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mechanics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMechanics.map((mechanic) => (
            <div key={mechanic.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              
              {/* Image */}
              <div className="relative h-48">
                <img 
                  src={mechanic.image} 
                  alt={mechanic.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    mechanic.available 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {mechanic.available ? 'Available' : 'Busy'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {mechanic.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{mechanic.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{mechanic.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Star className="w-4 h-4" />
                    <span>{mechanic.reviews} reviews</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Specializes in:</p>
                  <div className="flex flex-wrap gap-1">
                    {mechanic.specialties.map((specialty, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                    Book Now
                  </button>
                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                    <Eye className="w-4 h-4 text-gray-700" />
                    <span className="text-gray-700 font-medium">Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredMechanics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No mechanics found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleMechanicSearch;