import React, { useState } from 'react';
import { Search, Phone, Star, MapPin, Filter, User, Menu, X, ChevronLeft, Plus, Minus, Clock, Award, Shield } from 'lucide-react';

const FilterModal = ({ showFilters, setShowFilters, onApplyFilters }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDistance, setSelectedDistance] = useState('Within 5km');

  const serviceTypes = ["Free consultation", "Emergency Service", "Mobile Service", "Certified"];
  const ratings = [4.5, 4.0, 3.5, 3.0];
  const distances = ["Within 5km", "Within 10km", "Within 20km", "Any distance"];

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleRatingToggle = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

   const handleApplyFilters = () => {
    console.log('Applied filters:', {
      services: selectedServices,
      ratings: selectedRatings,
      distance: selectedDistance
    });

    if (onApplyFilters) {
      onApplyFilters({
        services: selectedServices,
        ratings: selectedRatings,
        distance: selectedDistance
      });
    }

    setShowFilters(false);
  };

  const handleClearFilters = () => {
    setSelectedServices([]);
    setSelectedRatings([]);
    setSelectedDistance('Within 5km');
  };

  if (!showFilters) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
      <div className="bg-white rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto w-full max-w-lg mx-4 transform transition-transform duration-300 ease-out">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Filter Results</h3>
          <button 
            onClick={() => setShowFilters(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Service Type Filter */}
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Service Type</h4>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceToggle(service)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedServices.includes(service)
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          
          {/* Rating Filter */}
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Rating</h4>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                  <input 
                    type="checkbox" 
                    className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingToggle(rating)}
                  />
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm">{rating}+ stars</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {/* Distance Filter */}
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Distance</h4>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDistance}
              onChange={(e) => setSelectedDistance(e.target.value)}
            >
              {distances.map((distance) => (
                <option key={distance} value={distance}>{distance}</option>
              ))}
            </select>
          </div>

          {/* Active Filters  */}
          {(selectedServices.length > 0 || selectedRatings.length > 0) && (
            <div>
              <h4 className="font-medium mb-3 text-gray-900">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((service) => (
                  <span
                    key={service}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center"
                  >
                    {service}
                    <button
                      onClick={() => handleServiceToggle(service)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedRatings.map((rating) => (
                  <span
                    key={rating}
                    className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs flex items-center"
                  >
                    {rating}+ stars
                    <button
                      onClick={() => handleRatingToggle(rating)}
                      className="ml-2 text-yellow-600 hover:text-yellow-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
          <button 
            onClick={handleClearFilters}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Clear All
          </button>
          <button 
            onClick={handleApplyFilters}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;