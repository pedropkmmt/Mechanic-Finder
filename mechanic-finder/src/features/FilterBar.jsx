import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    category: 'Diesel mechanics',
    location: '',
    range: '',
    price: '',
    searchName: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search filters:', filters);
    // search logic
  };

  return (
    <div className="w-full py-4">
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop Filter Bar */}
        <div className="hidden md:flex items-center justify-center gap-1 bg-white shadow-sm px-6 py-2 rounded-full border border-gray-200">
          {/* Search by Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              className="px-4 py-2 bg-transparent text-gray-700 text-sm border-0 focus:outline-none min-w-[140px] placeholder-gray-400"
              value={filters.searchName}
              onChange={(e) => handleFilterChange('searchName', e.target.value)}
            />
          </div>

          <div className="w-px h-6 bg-gray-200"></div>

          {/* Category Filter */}
          <div className="relative">
            <select 
              className="appearance-none px-4 py-2 pr-8 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[140px]"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="Diesel mechanics">Diesel mechanics</option>
              <option value="Auto repair">Auto repair</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Diagnostics">Diagnostics</option>
            </select>
            <FiChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>

          <div className="w-px h-6 bg-gray-200"></div>

          {/* Location Filter */}
          <div className="relative">
            <select 
              className="appearance-none px-4 py-2 pr-8 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[100px]"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">Location</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Durban">Durban</option>
              <option value="Pretoria">Pretoria</option>
            </select>
            <FiChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>

          <div className="w-px h-6 bg-gray-200"></div>

          {/* Range Filter */}
          <div className="relative">
            <select 
              className="appearance-none px-4 py-2 pr-8 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[80px]"
              value={filters.range}
              onChange={(e) => handleFilterChange('range', e.target.value)}
            >
              <option value="">Range</option>
              <option value="5km">5 km</option>
              <option value="10km">10 km</option>
              <option value="25km">25 km</option>
              <option value="50km">50+ km</option>
            </select>
            <FiChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>

          <div className="w-px h-6 bg-gray-200"></div>

          {/* Price Filter */}
          <div className="relative">
            <select 
              className="appearance-none px-4 py-2 pr-8 bg-transparent text-gray-700 text-sm border-0 focus:outline-none cursor-pointer min-w-[100px]"
              value={filters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="budget">R0 - R500</option>
              <option value="mid">R500 - R1500</option>
              <option value="premium">R1500+</option>
            </select>
            <FiChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>

          <div className="w-px h-6 bg-gray-200 ml-2"></div>
          <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 ml-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <FiSearch size={16} />
          </button>
        </div>

        {/* Tablet Filter Bar */}
        <div className="hidden sm:flex md:hidden flex-wrap items-center justify-center gap-2 bg-white shadow-sm px-4 py-3 rounded-2xl border border-gray-200">
          <div className="relative">
            <select 
              className="appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-full hover:border-blue-300 focus:border-blue-400 focus:outline-none cursor-pointer"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="Diesel mechanics">Diesel mechanics</option>
              <option value="Auto repair">Auto repair</option>
              <option value="Maintenance">Maintenance</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
          </div>

          <div className="relative">
            <select 
              className="appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-full hover:border-blue-300 focus:border-blue-400 focus:outline-none cursor-pointer"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">Location</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Durban">Durban</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
          </div>

          <div className="relative">
            <select 
              className="appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-full hover:border-blue-300 focus:border-blue-400 focus:outline-none cursor-pointer"
              value={filters.range}
              onChange={(e) => handleFilterChange('range', e.target.value)}
            >
              <option value="">Range</option>
              <option value="5km">5 km</option>
              <option value="10km">10 km</option>
              <option value="25km">25 km</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
          </div>

          <div className="relative">
            <select 
              className="appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-full hover:border-blue-300 focus:border-blue-400 focus:outline-none cursor-pointer"
              value={filters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="budget">R0 - R500</option>
              <option value="mid">R500 - R1500</option>
              <option value="premium">R1500+</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
          </div>

          <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FiSearch size={16} />
          </button>
        </div>

        {/* Mobile Filter Bar */}
        <div className="sm:hidden space-y-3">
          <div className="bg-white shadow-sm rounded-2xl border border-gray-200 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search diesel mechanics..."
                className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-full focus:border-blue-400 focus:outline-none"
              />
              <button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                <FiSearch size={16} />
              </button>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-2xl border border-gray-200 p-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <select 
                  className="w-full appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none cursor-pointer"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="Diesel mechanics">Diesel mechanics</option>
                  <option value="Auto repair">Auto repair</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
              </div>

              <div className="relative">
                <select 
                  className="w-full appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none cursor-pointer"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="">Location</option>
                  <option value="Johannesburg">Johannesburg</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Durban">Durban</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
              </div>

              <div className="relative">
                <select 
                  className="w-full appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none cursor-pointer"
                  value={filters.range}
                  onChange={(e) => handleFilterChange('range', e.target.value)}
                >
                  <option value="">Range</option>
                  <option value="5km">5 km</option>
                  <option value="10km">10 km</option>
                  <option value="25km">25 km</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
              </div>

              <div className="relative">
                <select 
                  className="w-full appearance-none px-3 py-2 pr-7 bg-gray-50 text-gray-700 text-sm border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none cursor-pointer"
                  value={filters.price}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                >
                  <option value="">All Prices</option>
                  <option value="budget">R0 - R500</option>
                  <option value="mid">R500 - R1500</option>
                  <option value="premium">R1500+</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;