import { useState } from "react";
import { Search, ChevronDown, Filter, MapPin, DollarSign, Settings, X } from "lucide-react";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    category: 'Diesel mechanics',
    location: '',
    range: '',
    price: '',
    searchName: ''
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search filters:', filters);
  };

  const clearFilters = () => {
    setFilters({
      category: 'Diesel mechanics',
      location: '',
      range: '',
      price: '',
      searchName: ''
    });
  };

  const activeFiltersCount = Object.values(filters).filter(val => val && val !== 'Diesel mechanics').length;

  return (
    <div className="w-full py-8 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Filter Bar */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex items-center bg-white/80 backdrop-blur-md shadow-2xl px-8 py-4 rounded-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
            {/* Search by Name */}
            <div className="relative group">
              <div className="flex items-center">
                <Search className="text-gray-400 mr-3" size={18} />
                <input
                  type="text"
                  placeholder="Search mechanics..."
                  className="px-2 py-2 bg-transparent text-gray-700 text-sm border-0 focus:outline-none min-w-[160px] placeholder-gray-400 font-medium"
                  value={filters.searchName}
                  onChange={(e) => handleFilterChange('searchName', e.target.value)}
                  onFocus={() => setFocusedInput('search')}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              {focusedInput === 'search' && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-6"></div>

            {/* Category Filter */}
            <div className="relative group">
              <div className="flex items-center">
                <Settings className="text-gray-400 mr-3" size={18} />
                <select 
                  className="appearance-none px-2 py-2 pr-6 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[140px] font-medium"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  onFocus={() => setFocusedInput('category')}
                  onBlur={() => setFocusedInput(null)}
                >
                  <option value="Diesel mechanics">Diesel mechanics</option>
                  <option value="Auto repair">Auto repair</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Diagnostics">Diagnostics</option>
                  <option value="Body work">Body work</option>
                </select>
                <ChevronDown className="text-gray-400 ml-1 group-hover:text-blue-500 transition-colors" size={16} />
              </div>
              {focusedInput === 'category' && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-6"></div>

            {/* Location Filter */}
            <div className="relative group">
              <div className="flex items-center">
                <MapPin className="text-gray-400 mr-3" size={18} />
                <select 
                  className="appearance-none px-2 py-2 pr-6 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[120px] font-medium"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  onFocus={() => setFocusedInput('location')}
                  onBlur={() => setFocusedInput(null)}
                >
                  <option value="">Location</option>
                  <option value="Johannesburg">Johannesburg</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Durban">Durban</option>
                  <option value="Pretoria">Pretoria</option>
                  <option value="Port Elizabeth">Port Elizabeth</option>
                </select>
                <ChevronDown className="text-gray-400 ml-1 group-hover:text-blue-500 transition-colors" size={16} />
              </div>
              {focusedInput === 'location' && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-6"></div>

            {/* Range Filter */}
            <div className="relative group">
              <select 
                className="appearance-none px-2 py-2 pr-6 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[90px] font-medium"
                value={filters.range}
                onChange={(e) => handleFilterChange('range', e.target.value)}
                onFocus={() => setFocusedInput('range')}
                onBlur={() => setFocusedInput(null)}
              >
                <option value="">Range</option>
                <option value="5km">5 km</option>
                <option value="10km">10 km</option>
                <option value="25km">25 km</option>
                <option value="50km">50+ km</option>
              </select>
              <ChevronDown className="text-gray-400 ml-1 group-hover:text-blue-500 transition-colors" size={16} />
              {focusedInput === 'range' && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-6"></div>

            {/* Price Filter */}
            <div className="relative group">
              <div className="flex items-center">
                <span className="text-gray-400 mr-3" size={18} >R</span>
                <select 
                  className="appearance-none px-2 py-2 pr-6 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[110px] font-medium"
                  value={filters.price}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                  onFocus={() => setFocusedInput('price')}
                  onBlur={() => setFocusedInput(null)}
                >
                  <option value="">All Prices</option>
                  <option value="budget">R0 - R500</option>
                  <option value="mid">R500 - R1500</option>
                  <option value="premium">R1500+</option>
                </select>
                <ChevronDown className="text-gray-400 ml-1 group-hover:text-blue-500 transition-colors" size={16} />
              </div>
              {focusedInput === 'price' && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-6"></div>

            {/* Search Button */}
            <button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              Search
            </button>
          </div>
        </div>

        {/* Mobile Filter Bar */}
        <div className="lg:hidden">
          {/* Main Search Bar */}
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 p-4 mb-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search mechanics..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50/80 text-gray-700 text-sm border border-gray-200/50 rounded-xl focus:border-blue-400 focus:outline-none backdrop-blur-sm font-medium"
                  value={filters.searchName}
                  onChange={(e) => handleFilterChange('searchName', e.target.value)}
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Filter Toggle Button */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg px-4 py-3 rounded-xl border border-white/20 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              <Filter size={18} />
              <span className="font-medium">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
              <ChevronDown className={`transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} size={16} />
            </button>
            
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearFilters}
                className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
              >
                <X size={16} />
                <span className="text-sm">Clear</span>
              </button>
            )}
          </div>

          {/* Collapsible Filter Panel */}
          <div className={`transition-all duration-300 overflow-hidden ${isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 p-6">
              <div className="grid grid-cols-1 gap-4">
                {/* Category */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <div className="relative">
                    <Settings className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      className="w-full appearance-none pl-12 pr-10 py-4 bg-gray-50/80 text-gray-700 text-sm border border-gray-200/50 rounded-xl focus:border-blue-400 focus:outline-none cursor-pointer font-medium"
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                    >
                      <option value="Diesel mechanics">Diesel mechanics</option>
                      <option value="Auto repair">Auto repair</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Diagnostics">Diagnostics</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Location and Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <select 
                        className="w-full appearance-none pl-12 pr-10 py-4 bg-gray-50/80 text-gray-700 text-sm border border-gray-200/50 rounded-xl focus:border-blue-400 focus:outline-none cursor-pointer font-medium"
                        value={filters.location}
                        onChange={(e) => handleFilterChange('location', e.target.value)}
                      >
                        <option value="">Any</option>
                        <option value="Johannesburg">Johannesburg</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Durban">Durban</option>
                        <option value="Pretoria">Pretoria</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Range</label>
                    <select 
                      className="w-full appearance-none px-4 py-4 pr-10 bg-gray-50/80 text-gray-700 text-sm border border-gray-200/50 rounded-xl focus:border-blue-400 focus:outline-none cursor-pointer font-medium"
                      value={filters.range}
                      onChange={(e) => handleFilterChange('range', e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="5km">5 km</option>
                      <option value="10km">10 km</option>
                      <option value="25km">25 km</option>
                      <option value="50km">50+ km</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Price Range */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      className="w-full appearance-none pl-12 pr-10 py-4 bg-gray-50/80 text-gray-700 text-sm border border-gray-200/50 rounded-xl focus:border-blue-400 focus:outline-none cursor-pointer font-medium"
                      value={filters.price}
                      onChange={(e) => handleFilterChange('price', e.target.value)}
                    >
                      <option value="">All Prices</option>
                      <option value="budget">R0 - R500</option>
                      <option value="mid">R500 - R1500</option>
                      <option value="premium">R1500+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;