import React, { useState } from 'react';
import BusinessListing from "../services/BusinessListing";
import { 
  Star,
  MapPin,
  Eye,
} from 'lucide-react';
const SearchedMechanics = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  const filters = ['All', 'BMW', 'Toyota', 'Ford', 'Honda'];
  
  const mechanics = [
    {
      id: 1,
      name: 'AutoFix Pro',
      rating: 4.8,
      reviews: 127,
      distance: '2.4 km',
      specialties: ['BMW', 'Mercedes', 'Audi'],
      available: true,
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop',
      mechanic_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Quick Service',
      rating: 4.9,
      reviews: 89,
      distance: '1.8 km',
      specialties: ['Toyota', 'Honda', 'Nissan'],
      available: true,
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop',
      mechanic_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Elite Motors',
      rating: 4.7,
      reviews: 156,
      distance: '3.2 km',
      specialties: ['Ford', 'Chevrolet', 'Hyundai'],
      available: false,
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop',
      mechanic_image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Precision Auto',
      rating: 4.6,
      reviews: 94,
      distance: '4.1 km',
      specialties: ['Toyota', 'Volkswagen', 'Audi'],
      available: true,
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop',
      mechanic_image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const filteredMechanics = activeFilter === 'All' 
    ? mechanics 
    : mechanics.filter(mechanic => 
        mechanic.specialties.some(specialty => 
          specialty.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  const handleBookNow = (mechanic) => {
    setSelectedMechanic(mechanic);
  };

  const handleClosePopup = () => {
    setSelectedMechanic(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header  */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-6 px-4">
              Local Mechanics Near You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Trusted automotive professionals ready to serve you
            </p>
          </div>

          {/* Filters  */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium sm:font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-slate-700 border border-white/20 hover:bg-white hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Mechanics Grid  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredMechanics.map((mechanic) => (
              <div key={mechanic.id} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:-translate-y-1 sm:hover:-translate-y-2">
                {/* Shop Image */}
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img 
                    src={mechanic.image} 
                    alt={mechanic.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Availability Badge  */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                      mechanic.available 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {mechanic.available ? 'Available' : 'Busy'}
                    </span>
                  </div>
                  
                  {/* Mechanic Profile Picture  */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center gap-2 sm:gap-3">
                    <img 
                      src={mechanic.mechanic_image} 
                      alt={`${mechanic.name} mechanic`}
                      className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <div className="text-white">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold drop-shadow-lg leading-tight">
                        {mechanic.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs sm:text-sm font-semibold">{mechanic.rating}</span>
                        <span className="text-xs sm:text-sm opacity-90">({mechanic.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content  */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Distance  */}
                  <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>{mechanic.distance}</span>
                  </div>

                  {/* Specialties  */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Specializes in:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {mechanic.specialties.map((specialty, i) => (
                        <span key={i} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons  */}
                  <div className="flex gap-2 sm:gap-3">
                    <button 
                      onClick={() => handleBookNow(mechanic)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium sm:font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Book Now
                    </button>
                    <button 
                      onClick={() => handleBookNow(mechanic)}
                      className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white border border-white/20 hover:border-blue-300 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Eye className="w-3 sm:w-4 h-3 sm:h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredMechanics.length === 0 && (
            <div className="text-center py-8 sm:py-12 md:py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 max-w-md mx-auto">
                <p className="text-slate-600 text-base sm:text-lg mb-4">No mechanics found for the selected filter.</p>
                <button 
                  onClick={() => setActiveFilter('All')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Show All Mechanics
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Business Listing Popup */}
      {selectedMechanic && (
        <BusinessListing 
          mechanic={selectedMechanic}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default SearchedMechanics;