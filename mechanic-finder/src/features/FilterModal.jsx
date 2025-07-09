import React, { useState } from 'react';
import { X, Star, MapPin } from 'lucide-react';

const FilterModal = ({ showFilters, setShowFilters, onApplyFilters }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const serviceTypes = [
    'Transmissions',
    'Brake Repair', 
    'Engine Diagnostics',
    'Radiators',
    'Oil Changes',
    'Tire Replacement',
    'Battery Service',
    'AC Repair',
    'Luxury Car Service',
    'Engine Overhaul',
    'Electrical',
    'General Repairs',
    'Suspension',
    'Wheel Alignment',
    'Air Conditioning'
  ];

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleApplyFilters = () => {
    const filters = {
      services: selectedServices,
      rating: selectedRating,
      distance: selectedDistance,
      status: selectedStatus,
      priceRange: selectedPriceRange
    };
    onApplyFilters(filters);
    setShowFilters(false);
  };

  const handleClearFilters = () => {
    setSelectedServices([]);
    setSelectedRating('');
    setSelectedDistance('');
    setSelectedStatus('');
    setSelectedPriceRange('');
  };

  if (!showFilters) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[9998]"
        onClick={() => setShowFilters(false)}
      />
      <div className="fixed inset-0 z-[9999] overflow-y-auto border-solid  border-4 border-black rounded-sm   ">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Filter Results</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Service Type */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Service Type</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {serviceTypes.map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[
                    { value: '4.5', label: '4.5+ stars' },
                    { value: '4.0', label: '4+ stars' },
                    { value: '3.5', label: '3.5+ stars' },
                    { value: '3.0', label: '3+ stars' }
                  ].map((rating) => (
                    <label key={rating.value} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating.value}
                        checked={selectedRating === rating.value}
                        onChange={(e) => setSelectedRating(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <div className="ml-3 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-700">{rating.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Distance */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Distance</h3>
                <div className="space-y-2">
                  {[
                    { value: '5', label: 'Within 5km' },
                    { value: '10', label: 'Within 10km' },
                    { value: '25', label: 'Within 25km' },
                    { value: '50', label: 'Within 50km' }
                  ].map((distance) => (
                    <label key={distance.value} className="flex items-center">
                      <input
                        type="radio"
                        name="distance"
                        value={distance.value}
                        checked={selectedDistance === distance.value}
                        onChange={(e) => setSelectedDistance(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <div className="ml-3 flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="ml-1 text-sm text-gray-700">{distance.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'budget', label: 'Budget (R300 - R800)', symbol: 'R' },
                    { value: 'moderate', label: 'Moderate (R800 - R1,500)', symbol: 'RR' },
                    { value: 'premium', label: 'Premium (R1,500 - R3,000)', symbol: 'RRR' },
                    { value: 'luxury', label: 'Luxury (R3,000+)', symbol: 'RRRR' }
                  ].map((price) => (
                    <label key={price.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={price.value}
                        checked={selectedPriceRange === price.value}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <div className="ml-3 flex items-center">
                        <span className="text-sm font-medium text-green-600 mr-2">{price.symbol}</span>
                        <span className="text-sm text-gray-700">{price.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Status</h3>
                <div className="space-y-2">
                  {[
                    { value: 'open', label: 'Open Now' },
                    { value: 'all', label: 'All Hours' }
                  ].map((status) => (
                    <label key={status.value} className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value={status.value}
                        checked={selectedStatus === status.value}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{status.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Clear All
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApplyFilters}
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;