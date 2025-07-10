import React, { useState } from 'react';
import { 
  Wrench, 
  Star,
  MapPin,
  Eye,
  Phone,
  Globe,
  Mail,
  Clock,
  Calendar,
  PhoneCall,
  Navigation,
  X
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const BusinessListing = ({ mechanic, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  
  const shopImages = [
    'https://files.idyllic.app/files/static/2250075?width=256&optimizer=image',
    'https://auto.edu/hs-fs/hubfs/shutterstock_2473446969.jpg?width=5472&height=3648&name=shutterstock_2473446969.jpg',
    'https://static.wixstatic.com/media/24457cc02d954991b6aafb169233cc46.jpg/v1/fill/w_640,h_426,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/24457cc02d954991b6aafb169233cc46.jpg'
  ];

  const businessHours = [
    { day: 'Today (Friday)', hours: '8:00 AM - 6:00 PM', isToday: true },
    { day: 'Monday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM', isToday: false }
  ];

  const serviceOptions = [
    { id: 'oil-change', name: 'Oil Change', icon: '🛢️', price: 'R350 - R500', duration: '30 min' },
    { id: 'brake-service', name: 'Brake Service', icon: '🛑', price: 'R800 - R1500', duration: '1-2 hours' },
    { id: 'tire-rotation', name: 'Tire Rotation', icon: '🔄', price: 'R200 - R300', duration: '45 min' },
    { id: 'battery-check', name: 'Battery Check', icon: '🔋', price: 'R150 - R250', duration: '15 min' },
    { id: 'engine-diagnostic', name: 'Engine Diagnostic', icon: '🔧', price: 'R500 - R800', duration: '1 hour' },
    { id: 'transmission-service', name: 'Transmission Service', icon: '⚙️', price: 'R1200 - R2000', duration: '2-3 hours' },
    { id: 'ac-service', name: 'A/C Service', icon: '❄️', price: 'R600 - R1000', duration: '1 hour' },
    { id: 'general-maintenance', name: 'General Maintenance', icon: '🔍', price: 'R400 - R800', duration: '1-2 hours' },
    { id: 'wheel-alignment', name: 'Wheel Alignment', icon: '📐', price: 'R300 - R500', duration: '45 min' },
    { id: 'exhaust-repair', name: 'Exhaust Repair', icon: '💨', price: 'R400 - R1200', duration: '1-2 hours' }
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const pricingInfo = [
    { 
      icon: '🔧', 
      title: 'Oil Change', 
      price: 'R (Moderate)',
      bgColor: 'bg-yellow-100' 
    },
    { 
      icon: '⚙️', 
      title: 'Labor Rate', 
      price: '200-300/hour',
      bgColor: 'bg-orange-100' 
    },
    { 
      icon: '💳', 
      title: 'Payment', 
      price: 'Cash, Card',
      bgColor: 'bg-green-100' 
    }
  ];

  const reviews = [
    {
      name: 'Sarah M.',
      date: '2 days ago',
      rating: 5,
      text: 'Excellent service! They diagnosed my brake issue quickly and provided a fair quote. The work was completed on time and my car feels brand new. Highly recommend!'
    }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-1020 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-110 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Shop Photo */}
        <div className="relative">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img 
              src={mechanic.image} 
              alt={mechanic.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
            {mechanic.name}
          </div>
          <div className="absolute top-4 right-12 flex space-x-1">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className={`w-4 h-4 ${star <= Math.floor(mechanic.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>

        {/* Location & Contact */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="font-semibold">Location & Contact</span>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <MapPin className="w-4 h-4 text-black mr-2 mt-0.5" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-gray-600">1425 Oak Street, Downtown</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-4 h-4 text-black mr-2 mt-0.5" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-gray-600">(555) 012-3456</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Globe className="w-4 h-4 text-black mr-2 mt-0.5" />
              <div>
                <div className="font-medium">Website</div>
                <div className="text-blue-600">www.{mechanic.name.toLowerCase().replace(/\s+/g, '')}.com</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-4 h-4 text-black mr-2 mt-0.5" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-blue-600">info@{mechanic.name.toLowerCase().replace(/\s+/g, '')}.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Services */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-3">
            <span className="font-semibold">Select Services</span>
            {selectedServices.length > 0 && (
              <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {selectedServices.length} selected
              </span>
            )}
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {serviceOptions.map((service) => (
              <div 
                key={service.id}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedServices.includes(service.id) 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center flex-1">
                  <div className="text-xl mr-3">{service.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-gray-600">{service.price} • {service.duration}</div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedServices.includes(service.id) 
                    ? 'border-blue-500 bg-blue-500' 
                    : 'border-gray-300'
                }`}>
                  {selectedServices.includes(service.id) && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Specialties */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-3">
            <span className="font-semibold">Services & Specialties</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {mechanic.specialties.map((specialty, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-white text-xs font-medium bg-blue-500"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Shop Photos */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-3">
            <span className="font-semibold">Shop Photos</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {shopImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80"
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Shop photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-3">
            <Clock className="w-4 h-4 mr-1" />
            <span className="font-semibold">Business Hours</span>
          </div>
          <div className="space-y-1 text-sm">
            {businessHours.map((schedule, index) => (
              <div 
                key={index}
                className={`flex justify-between ${schedule.isToday ? 'bg-green-100 px-2 py-1 rounded' : ''}`}
              >
                <span className={schedule.isToday ? 'font-medium' : 'text-gray-600'}>
                  {schedule.day}
                </span>
                <span className={schedule.isToday ? 'font-medium' : 'text-gray-600'}>
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Information */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-3">
            <span className="font-semibold">Pricing Information</span>
          </div>
          <div className="space-y-2">
            {pricingInfo.map((item, index) => (
              <div key={index} className={`flex items-center p-2 rounded-lg ${item.bgColor}`}>
                <div className="text-xl mr-3">{item.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="p-4 border-b">
          <div className="flex items-center text-black mb-3">
            <span className="font-semibold">Recent Reviews</span>
          </div>
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-sm">{review.name}</span>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
              <div className="flex mb-2">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <button 
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${
              selectedServices.length > 0 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={selectedServices.length === 0}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment {selectedServices.length > 0 && `(${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''})`}
          </button>
          
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
            <PhoneCall className="w-4 h-4 mr-2" />
            Call Now
          </button>
          
          <Link to="/map">
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BusinessListing