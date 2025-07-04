import React, { useState, useEffect, useRef } from 'react';
import { Search, Phone, Star, MapPin, Filter, User, Menu, X, ChevronLeft, Plus, Minus, Clock, Award, Shield, Map as MapIcon } from 'lucide-react';
import FilterModal from '../features/ListingFilter';

function MechanicsFinder() {
  const [selectedBusiness, setSelectedBusiness] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);
  
  const businesses = [
    {
      id: 1,
      name: "Momo Auto",
      rating: 4.8,
      reviews: 1271,
      address: "1425 Oak Street, Johannesburg",
      phone: "(011) 032-3456",
      services: ["Transmissions", "Brake Repair", "Engine Diagnostics", "Radiators"],
      image: "shop.jpg",
      status: "Open",
      verified: true,
      responseTime: "Usually responds within 2 hours",
      price: "$$",
      yearsInBusiness: 12,
      lat: -26.2041,
      lng: 28.0473
    },
    {
      id: 2,
      name: "Quick Fix Auto",
      rating: 4.6,
      reviews: 892,
      address: "789 Main Road, Sandton",
      phone: "(011) 123-4567",
      services: ["Oil Changes", "Tire Replacement", "Battery Service", "AC Repair"],
      image: "shop2.jpg",
      status: "Open",
      verified: true,
      responseTime: "Usually responds within 1 hour",
      price: "$",
      yearsInBusiness: 8,
      lat: -26.1076,
      lng: 28.0567
    },
    {
      id: 3,
      name: "Premium Motors",
      rating: 4.9,
      reviews: 1543,
      address: "456 Church Street, Pretoria",
      phone: "(012) 987-6543",
      services: ["Luxury Car Service", "Engine Overhaul", "Transmission", "Electrical"],
      image: "shop3.jpg",
      status: "Closed",
      verified: true,
      responseTime: "Usually responds within 3 hours",
      price: "$$$",
      yearsInBusiness: 15,
      lat: -25.7479,
      lng: 28.2293
    },
    {
      id: 4,
      name: "Cape Town Motors",
      rating: 4.7,
      reviews: 654,
      address: "123 Long Street, Cape Town",
      phone: "(021) 456-7890",
      services: ["General Repairs", "Brake Service", "Suspension", "Wheel Alignment"],
      image: "shop4.jpg",
      status: "Open",
      verified: true,
      responseTime: "Usually responds within 2 hours",
      price: "$$",
      yearsInBusiness: 10,
      lat: -33.9249,
      lng: 18.4241
    },
    {
      id: 5,
      name: "Durban Auto Care",
      rating: 4.5,
      reviews: 432,
      address: "567 West Street, Durban",
      phone: "(031) 789-0123",
      services: ["Engine Service", "Transmission", "Air Conditioning", "Electrical"],
      image: "shop5.jpg",
      status: "Open",
      verified: true,
      responseTime: "Usually responds within 1 hour",
      price: "$",
      yearsInBusiness: 7,
      lat: -29.8587,
      lng: 31.0218
    }
  ];

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
      
      // Clear existing markers
      markersRef.current = [];
      
      // Add markers for businesses
      businesses.forEach((business, index) => {
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
      const group = new window.L.featureGroup(markersRef.current);
      leafletMapRef.current.fitBounds(group.getBounds().pad(0.1));
    }
    
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

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
    if (leafletMapRef.current && businesses[selectedBusiness]) {
      const business = businesses[selectedBusiness];
      leafletMapRef.current.setView([business.lat, business.lng], 13);
      updateMarkerIcons(selectedBusiness);
      
      // Open popup for selected business
      if (markersRef.current[selectedBusiness]) {
        markersRef.current[selectedBusiness].openPopup();
      }
    }
  }, [selectedBusiness]);

  return (
    <div className="flex h-screen bg-gray-50">
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
              <span className="text-blue-600 text-sm">+27 (0)11 657 8978</span>
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
                  placeholder="Search in South Africa..."
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
                {businesses.length} Auto mechanics across South Africa
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
                      <span className={`px-2 py-1 rounded text-xs font-medium ml-auto ${
                        business.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
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
        <div className={`flex-1 ${showMap ? 'block' : 'hidden lg:block'} bg-white rounded-lg shadow-sm`}>
          <div className="h-full flex flex-col">
            {/* Map Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">South Africa Map View</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Map Container */}
            <div className="flex-1 relative">
              <div ref={mapRef} className="w-full h-full"></div>
              
              {/* Map loading placeholder - shows when Leaflet isn't available */}
              {typeof window === 'undefined' || !window.L ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Loading South African map...</p>
                    <p className="text-xs text-gray-400 mt-2">
                      Include Leaflet CSS and JS in your HTML head:
                    </p>
                    <div className="text-xs text-gray-400 mt-2 bg-gray-50 p-2 rounded">
                      <div>&lt;link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /&gt;</div>
                      <div>&lt;script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"&gt;&lt;/script&gt;</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowMap(!showMap)}
        className="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-30"
      >
        {showMap ? <X className="w-6 h-6" /> : <MapIcon className="w-6 h-6" />}
      </button>
      
      {/* Filter Modal */}
      <FilterModal/>
    </div>
  );
}

export default MechanicsFinder;