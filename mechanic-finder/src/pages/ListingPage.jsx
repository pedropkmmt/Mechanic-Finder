import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, Phone, Star, MapPin, Filter, User, Menu, X, ChevronLeft, Plus, Minus, Clock, Award, Shield, Map as MapIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'
import { businesses } from '../lib/businesses.json'
import BusinessListing from '../services/BusinessListing';

const MechanicsFinder = ({ filters = {} }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchResults, setSearchResults] = useState(businesses);
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);

  // Booking Popup
   const handleClosePopup = () => {
    setSelectedMechanic(null);
  }
  // Combined filtering functionality
  const filteredBusinesses = useMemo(() => {
    let filtered = businesses;

    // Apply FilterBar filters
    if (filters.searchName && filters.searchName.trim()) {
      const nameQuery = filters.searchName.toLowerCase();
      filtered = filtered.filter(business => 
        business.name.toLowerCase().includes(nameQuery)
      );
    }

    if (filters.category && filters.category !== 'Diesel mechanics') {
      filtered = filtered.filter(business => 
        business.services.some(service => 
          service.toLowerCase().includes(filters.category.toLowerCase())
        )
      );
    }

    if (filters.location) {
      filtered = filtered.filter(business => 
        business.address.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.price) {
      filtered = filtered.filter(business => {
        const businessPrice = business.price || '';
        
        switch (filters.price) {
          case 'budget':
            return businessPrice.includes('R0') || businessPrice.includes('R1') || businessPrice.includes('R2') || businessPrice.includes('R3') || businessPrice.includes('R4') || businessPrice.includes('R500') || businessPrice.toLowerCase().includes('budget');
          case 'mid':
            return businessPrice.includes('R5') || businessPrice.includes('R6') || businessPrice.includes('R7') || businessPrice.includes('R8') || businessPrice.includes('R9') || businessPrice.includes('R1') || businessPrice.toLowerCase().includes('mid');
          case 'premium':
            return businessPrice.includes('R15') || businessPrice.includes('R2') || businessPrice.includes('R3') || businessPrice.toLowerCase().includes('premium');
          default:
            return true;
        }
      });
    }
    if (filters.range) {
      
      console.log('Range filter applied:', filters.range);
    }

    return filtered;
  }, [filters]);

  // Update search results when filtered businesses change
  useEffect(() => {
    setSearchResults(filteredBusinesses);
    // Reset selected business to first result when search changes
    if (filteredBusinesses.length > 0) {
      setSelectedBusiness(0);
    }
  }, [filteredBusinesses]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize map with South African view
  useEffect(() => {
    if (typeof window !== 'undefined' && window.L && mapRef.current && !leafletMapRef.current) {
      leafletMapRef.current = window.L.map(mapRef.current).setView([-29.0852, 26.1596], 6);
      
      // Add OpenStreetMap tile layer optimized for South Africa
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        minZoom: 5
      }).addTo(leafletMapRef.current);
      
      updateMapMarkers();
    }
    
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Update map markers when search results change
  useEffect(() => {
    if (leafletMapRef.current) {
      updateMapMarkers();
    }
  }, [searchResults]);

  // Function to update map markers
  const updateMapMarkers = () => {
    if (!leafletMapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      leafletMapRef.current.removeLayer(marker);
    });
    markersRef.current = [];

    // Add markers for filtered businesses
    searchResults.forEach((business, index) => {
      // Custom icon for different business types
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background-color: ${selectedBusiness === index ? '#2563eb' : '#3b82f6'};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
          ">
            ${index + 1}
          </div>
        `,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
      });
      
      const marker = window.L.marker([business.lat, business.lng], {
        icon: customIcon
      }).addTo(leafletMapRef.current);
      
      const popupContent = `
        <div class="p-3 max-w-xs">
          <h3 class="font-semibold text-lg text-gray-900 mb-2">${business.name}</h3>
          <div class="flex items-center mb-2">
            <span class="text-yellow-500 mr-1">★</span>
            <span class="text-sm font-medium">${business.rating}</span>
            <span class="text-gray-500 ml-1 text-sm">(${business.reviews} reviews)</span>
          </div>
          <div class="flex items-center mb-2">
            <svg class="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="text-sm text-gray-600">${business.address}</span>
          </div>
          <div class="flex items-center mb-3">
            <svg class="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="text-sm text-gray-600">${business.phone}</span>
          </div>
          <div class="flex flex-wrap gap-1 mb-3">
            ${business.services.slice(0, 3).map(service => 
              `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">${service}</span>`
            ).join('')}
          </div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-gray-600">${business.price}</span>
            <span class="px-2 py-1 rounded text-xs font-medium ${
              business.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }">
              ${business.status}
            </span>
          </div>
          <div class="flex gap-2">
            <button class="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Book Now
            </button>
            <button class="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-50 transition-colors">
              Details
            </button>
          </div>
        </div>
      `;
      
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
      });
      
      // Click event to select business
      marker.on('click', () => {
        setSelectedBusiness(index);
        // Update marker icon to show selection
        updateMarkerIcons(index);
      });
      
      // Store marker reference
      markersRef.current.push(marker);
    });
    
    // Fit map to show all markers
    if (markersRef.current.length > 0) {
      const group = new window.L.featureGroup(markersRef.current);
      leafletMapRef.current.fitBounds(group.getBounds().pad(0.1));
    }
  };

  // Function to update marker icons based on selection
  const updateMarkerIcons = (selectedIndex) => {
    markersRef.current.forEach((marker, index) => {
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background-color: ${selectedIndex === index ? '#2563eb' : '#3b82f6'};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
          ">
            ${index + 1}
          </div>
        `,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
      });
      marker.setIcon(customIcon);
    });
  };

  // Update map when selected business changes
  useEffect(() => {
    if (leafletMapRef.current && searchResults[selectedBusiness]) {
      const business = searchResults[selectedBusiness];
      leafletMapRef.current.setView([business.lat, business.lng], 13);
      updateMarkerIcons(selectedBusiness);
      
      // Open popup for selected business
      if (markersRef.current[selectedBusiness]) {
        markersRef.current[selectedBusiness].openPopup();
      }
    }
  }, [selectedBusiness, searchResults]);

  // Generate filter summary for display
  const getFilterSummary = () => {
    const activeFilters = [];
    
    if (filters.searchName) activeFilters.push(`"${filters.searchName}"`);
    if (filters.category && filters.category !== 'Diesel mechanics') activeFilters.push(filters.category);
    if (filters.location) activeFilters.push(filters.location);
    if (filters.price) {
      const priceLabels = {
        budget: 'R0-R500',
        mid: 'R500-R1500',
        premium: 'R1500+'
      };
      activeFilters.push(priceLabels[filters.price]);
    }
    if (filters.range) activeFilters.push(`${filters.range} range`);
    
    return activeFilters;
  };

  const activeFilters = getFilterSummary();

  return (
    <>
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50">
            <div className="p-4">
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowMap(false);
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  View List
                </button>
                
                <button
                  onClick={() => {
                    setShowMap(true);
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  View Map
                </button>
                
                <button
                  onClick={() => {
                    setShowFilters(true);
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex w-full h-screen">
        {/* Left Panel - Business List */}
        <div className={`w-full lg:w-2/5 bg-white ${showMap && isMobile ? 'hidden' : 'block'} ${!isMobile ? 'border-r border-gray-200' : ''}`}>
          <div className="p-4 pb-2">
            <div className="mb-4">
              {/* Active Filters Display */}
              {activeFilters.length > 0 && (
                <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="text-sm text-blue-700 font-medium">Active filters:</span>
                    {activeFilters.map((filter, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Search Results Info */}
              {activeFilters.length > 0 && (
                <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    {searchResults.length > 0 ? (
                      <>
                        Found <span className="font-semibold">{searchResults.length}</span> mechanic{searchResults.length !== 1 ? 's' : ''} 
                        {activeFilters.length > 0 && (
                          <> matching your criteria</>
                        )}
                      </>
                    ) : (
                      <>No mechanics found matching your criteria</>
                    )}
                  </p>
                </div>
              )}
              
              {/* Filter Row */}
              <div className="flex items-center space-x-2 mb-4 overflow-x-auto pb-2">
                <button 
                  onClick={() => setShowFilters(true)}
                  className="flex-shrink-0 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                {searchResults.length} Auto mechanics {activeFilters.length > 0 ? 'found' : 'across South Africa'}
              </div>
            </div>
          </div>

          {/* Business Listings */}
          <div className="overflow-y-auto px-4 pb-20 lg:pb-4" style={{ height: 'calc(100vh - 200px)' }}>
            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No mechanics found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or browse all mechanics
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Show All Mechanics
                </button>
              </div>
            ) : (
              searchResults.map((business, index) => (
                <div
                  key={business.id}
                  className={`p-3 lg:p-4 mb-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors shadow-sm ${
                    selectedBusiness === index ? 'bg-blue-50 border-blue-600 shadow-md' : ''
                  }`}
                  onClick={() => setSelectedBusiness(index)}
                >
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="relative flex-shrink-0 w-full sm:w-32 h-24 sm:h-20">
                        <img
                          src="shop.jpg"
                          alt={business.name}
                          className="w-full h-[190px] object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTI4IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCAzMkg0OFY0MEg0MFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik01MiAzMkg2MFY0MEg1MlYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik00MCA0NEg0OFY1Mkg0MFY0NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik01MiA0NEg2MFY1Mkg1MlY0NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik02NCAzMkg3MlY0MEg2NFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik02NCA0NEg3MlY1Mkg2NFY0NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik03NiAzMkg4NFY0MEg3NlYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik03NiA0NEg4NFY1Mkg3NlY0NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik04OCAzMkg5NlY0MEg4OFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+InRoIGQ9Ik04OCA0NEg5NlY1Mkg4OFY0NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHRleHQgeD0iNjQiIHk9IjQ4IiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF1dG8gU2hvcDwvdGV4dD4KPC9zdmc+';
                          }}
                        />
                        {business.verified && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">{business.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{business.rating}</span>
                          <span className="text-gray-500 ml-1 text-sm">({business.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="flex items-start mb-2">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 break-words">{business.address}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {business.services.slice(0, isMobile ? 2 : 4).map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {service}
                          </span>
                        ))}
                        {business.services.length > (isMobile ? 2 : 4) && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{business.services.length - (isMobile ? 2 : 4)} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600">{business.phone}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          business.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {business.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <Link to="/details">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Book Appointment
                    </button>
                    </Link>
                    <Link to="/details">
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className={`${showMap || !isMobile ? 'flex-1' : 'hidden'} ${showMap && isMobile ? 'w-full' : ''} relative`}>
          {/* Map Container */}
          <div className="absolute inset-0">
            <div ref={mapRef} className="w-full h-full"></div>
            
            {/*  Leaflet isn't available */}
            {typeof window === 'undefined' || !window.L ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-4">
                  <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Loading South African map...</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Include Leaflet CSS and JS in your HTML head:
                  </p>
                  <div className="text-xs text-gray-400 mt-2 bg-gray-50 p-2 rounded max-w-md mx-auto">
                    <div className="break-all">&lt;link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /&gt;</div>
                    <div className="break-all">&lt;script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"&gt;&lt;/script&gt;</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-20">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowMap(false)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                !showMap ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Menu className="w-5 h-5" />
              <span className="text-sm font-medium">List</span>
            </button>
            
            <div className="text-sm text-gray-600">
              {searchResults.length > 0 ? `${selectedBusiness + 1} of ${searchResults.length}` : 'No results'}
            </div>
            
            <button
              onClick={() => setShowMap(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                showMap ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <MapIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Map</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MechanicsFinder;