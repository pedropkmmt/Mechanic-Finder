import React, { useState } from 'react';
import { Search, Phone, Star, MapPin, Filter, User, Menu, X, ChevronLeft, Plus, Minus, Clock, Award, Shield } from 'lucide-react';
const FilterModal = ({ showFilters, setShowFilters }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${showFilters ? 'block' : 'hidden'}`}>
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Filter Results</h3>
          <button 
            onClick={() => setShowFilters(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Service Type</h4>
            <div className="flex flex-wrap gap-2">
              {["Free consultation", "Emergency Service", "Mobile Service", "Certified"].map((filter) => (
                <button
                  key={filter}
                  className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Rating</h4>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-3 w-4 h-4 text-blue-600 rounded" />
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm">{rating}+ stars</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-gray-900">Distance</h4>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Within 5km</option>
              <option>Within 10km</option>
              <option>Within 20km</option>
              <option>Any distance</option>
            </select>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Apply Filters
          </button>
          <button 
            onClick={() => setShowFilters(false)}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;