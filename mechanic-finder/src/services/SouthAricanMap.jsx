import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search, Filter, X, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import NavBar from '../components/Navbar';


const SouthAfricanMap = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const provinces = [
    {
      id: 'western-cape',
      name: 'Western Cape',
      capital: 'Cape Town',
      mechanics: 245,
      color: '#3B82F6',
      bounds: [[-34.5, 18.0], [-30.0, 24.0]],
      center: [-33.2, 19.0]
    },
    {
      id: 'eastern-cape',
      name: 'Eastern Cape',
      capital: 'Bhisho',
      mechanics: 189,
      color: '#10B981',
      bounds: [[-34.5, 24.0], [-30.0, 30.0]],
      center: [-32.3, 26.5]
    },
    {
      id: 'northern-cape',
      name: 'Northern Cape',
      capital: 'Kimberley',
      mechanics: 87,
      color: '#F59E0B',
      bounds: [[-34.0, 16.0], [-28.0, 24.0]],
      center: [-29.1, 21.8]
    },
    {
      id: 'free-state',
      name: 'Free State',
      capital: 'Bloemfontein',
      mechanics: 134,
      color: '#EF4444',
      bounds: [[-30.5, 24.0], [-26.0, 30.0]],
      center: [-29.1, 26.2]
    },
    {
      id: 'kwazulu-natal',
      name: 'KwaZulu-Natal',
      capital: 'Pietermaritzburg',
      mechanics: 298,
      color: '#8B5CF6',
      bounds: [[-31.0, 28.0], [-26.5, 33.0]],
      center: [-29.0, 30.4]
    },
    {
      id: 'mpumalanga',
      name: 'Mpumalanga',
      capital: 'Mbombela',
      mechanics: 156,
      color: '#06B6D4',
      bounds: [[-27.0, 28.5], [-24.0, 32.0]],
      center: [-25.5, 30.5]
    },
    {
      id: 'limpopo',
      name: 'Limpopo',
      capital: 'Polokwane',
      mechanics: 123,
      color: '#84CC16',
      bounds: [[-25.5, 26.0], [-22.0, 32.0]],
      center: [-23.9, 29.4]
    },
    {
      id: 'north-west',
      name: 'North West',
      capital: 'Mahikeng',
      mechanics: 98,
      color: '#F97316',
      bounds: [[-27.0, 22.0], [-24.0, 28.0]],
      center: [-25.8, 25.1]
    },
    {
      id: 'gauteng',
      name: 'Gauteng',
      capital: 'Johannesburg',
      mechanics: 456,
      color: '#EC4899',
      bounds: [[-26.5, 27.0], [-25.0, 29.0]],
      center: [-26.2, 28.0]
    }
  ];

  const majorCities = [
    { name: 'Cape Town', lat: -33.9249, lng: 18.4241, mechanics: 125, province: 'Western Cape' },
    { name: 'Johannesburg', lat: -26.2041, lng: 28.0473, mechanics: 234, province: 'Gauteng' },
    { name: 'Durban', lat: -29.8587, lng: 31.0218, mechanics: 156, province: 'KwaZulu-Natal' },
    { name: 'Pretoria', lat: -25.7479, lng: 28.2293, mechanics: 98, province: 'Gauteng' },
    { name: 'Port Elizabeth', lat: -33.9608, lng: 25.6022, mechanics: 76, province: 'Eastern Cape' },
    { name: 'Bloemfontein', lat: -29.0852, lng: 26.1596, mechanics: 67, province: 'Free State' }
  ];

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapRef.current) return;

    // Create Leaflet CSS and JS dynamically
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    document.head.appendChild(leafletCSS);

    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
    leafletJS.onload = () => {
      const L = window.L;
      
      // Initialize map
      const mapInstance = L.map(mapRef.current, {
        center: [-29.0, 24.0], 
        zoom: isMobile ? 5 : 6,
        scrollWheelZoom: true,
        zoomControl: !isMobile
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(mapInstance);

      // Add custom zoom control for mobile
      if (isMobile) {
        L.control.zoom({
          position: 'bottomright'
        }).addTo(mapInstance);
      }

      // Add city markers with click handlers
      const cityMarkers = [];
      majorCities.forEach(city => {
        const marker = L.marker([city.lat, city.lng], {
          icon: L.divIcon({
            html: `<div class="bg-red-600 text-white rounded-full ${isMobile ? 'w-5 h-5' : 'w-6 h-6'} flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white">M</div>`,
            className: 'custom-marker',
            iconSize: isMobile ? [20, 20] : [24, 24],
            iconAnchor: isMobile ? [10, 10] : [12, 12]
          })
        });
        
        marker.addTo(mapInstance);
        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${city.name}</h3>
            <p class="text-xs text-gray-600">Available Mechanics: ${city.mechanics}</p>
          </div>
        `);
        
        // Add click handler to update selected city
        marker.on('click', () => {
          setSelectedCity(city);
          setSelectedProvince(null);
          if (isMobile) {
            setShowSidebar(true);
          }
        });
        
        cityMarkers.push(marker);
      });

      setMap(mapInstance);
      setMarkers(cityMarkers);
    };

    document.head.appendChild(leafletJS);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [isMobile]);

  // Handle province selection
  const handleProvinceClick = (province) => {
    setSelectedProvince(province);
    setSelectedCity(null);
    if (map) {
      map.setView(province.center, isMobile ? 7 : 8);
    }
    if (isMobile) {
      setShowSidebar(true);
    }
  };

  const filteredProvinces = provinces.filter(province =>
    province.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    province.capital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSelectedInfo = () => {
    if (selectedCity) {
      return (
        <div className="space-y-4 md:space-y-6">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              {selectedCity.name}
            </h2>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700">Province</p>
                  <p className="text-xs md:text-sm text-gray-600">{selectedCity.province}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700">Available Mechanics</p>
                  <p className="text-xs md:text-sm text-gray-600">{selectedCity.mechanics} mechanics</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📍</span>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700">Coordinates</p>
                  <p className="text-xs md:text-sm text-gray-600">{selectedCity.lat.toFixed(4)}, {selectedCity.lng.toFixed(4)}</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-3 md:mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base">
              Find Mechanics Here
            </button>
          </div>
        </div>
      );
    }

    if (selectedProvince) {
      return (
        <div className="space-y-4 md:space-y-6">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              {selectedProvince.name}
            </h2>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700">Capital</p>
                  <p className="text-xs md:text-sm text-gray-600">{selectedProvince.capital}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700">Available Mechanics</p>
                  <p className="text-xs md:text-sm text-gray-600">{selectedProvince.mechanics} mechanics</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-3 md:mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base">
              Find Mechanics Here
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center py-8 md:py-12">
        <MapPin className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4" />
        <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
          Select a Location
        </h3>
        <p className="text-xs md:text-sm text-gray-500 px-4">
          Click on any city marker to view detailed information, or select a province from the list below
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      {/* NavBar */}
      <div className="fixed top-0 left-0 right-0 z-[1010]">
        <NavBar />
      </div>

      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 p-4 md:p-6 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Find Mechanics Across South Africa
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
            <input
              type="text"
              placeholder="Search provinces or cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Mobile Toggle Button */}
          {isMobile && (
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {showSidebar ? 'Hide' : 'Show'} Filters
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 flex relative">
        {/* Map Section */}
        <div className="flex-1 p-2 md:p-4 lg:p-6">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-200 h-full min-h-[400px] md:min-h-[600px] relative overflow-hidden">
            {/* Leaflet Map Container */}
            <div 
              ref={mapRef} 
              className="w-full h-full rounded-xl md:rounded-2xl"
              style={{ minHeight: isMobile ? '400px' : '600px' }}
            />
            
            {/* Floating Legend */}
            <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 shadow-lg border border-gray-200 z-[1000]">
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2">Legend</h3>
              <div className="space-y-1 md:space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full"></div>
                  <span className="text-xs text-gray-600">Major Cities</span>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-2 right-2 md:top-6 md:right-6 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-1 md:p-2 shadow-lg border border-gray-200 z-[1000]">
              <button
                onClick={() => map?.setView([-29.0, 24.0], isMobile ? 5 : 6)}
                className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md md:rounded-lg transition-colors"
              >
                Reset View
              </button>
            </div>
          </div>
        </div>

        {/* Info Panel - Desktop */}
        {!isMobile && (
          <div className="w-80 xl:w-96 p-4 lg:p-6 bg-gray-50 border-l border-gray-200 overflow-y-auto">
            {renderSelectedInfo()}

            {/* Quick Stats */}
            <div className="mt-6 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                Quick Stats
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-600">Total Mechanics</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">
                    {provinces.reduce((sum, p) => sum + p.mechanics, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-600">Provinces</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs md:text-sm text-gray-600">Major Cities</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">6</span>
                </div>
              </div>
            </div>

            {/* Province List */}
            <div className="mt-6 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                All Provinces
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredProvinces.map((province) => (
                  <div
                    key={province.id}
                    className={`p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedProvince?.id === province.id
                        ? 'bg-blue-50 border-blue-200 border'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleProvinceClick(province)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div
                          className="w-3 h-3 md:w-4 md:h-4 rounded"
                          style={{ backgroundColor: province.color }}
                        ></div>
                        <div>
                          <p className="text-xs md:text-sm font-medium text-gray-900">
                            {province.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {province.capital}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        {province.mechanics}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Sidebar */}
        {isMobile && (
          <div
            className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[1020] ${
              showSidebar ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-900">Location Details</h2>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {renderSelectedInfo()}

                {/* Quick Stats */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Quick Stats
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Mechanics</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {provinces.reduce((sum, p) => sum + p.mechanics, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Provinces</span>
                      <span className="text-sm font-semibold text-gray-900">9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Major Cities</span>
                      <span className="text-sm font-semibold text-gray-900">6</span>
                    </div>
                  </div>
                </div>

                {/* Province List */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    All Provinces
                  </h3>
                  <div className="space-y-2">
                    {filteredProvinces.map((province) => (
                      <div
                        key={province.id}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedProvince?.id === province.id
                            ? 'bg-blue-50 border-blue-200 border'
                            : 'hover:bg-gray-100 bg-white'
                        }`}
                        onClick={() => handleProvinceClick(province)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: province.color }}
                            ></div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {province.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {province.capital}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-semibold text-gray-700">
                            {province.mechanics}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Overlay */}
        {isMobile && showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[1010]"
            onClick={() => setShowSidebar(false)}
          />
        )}
      </div>
    </div>
  );
};

export default SouthAfricanMap;