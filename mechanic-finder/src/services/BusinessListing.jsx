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

const BusinessListing = ({ mechanic, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const shopImages = [
    'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1632823469522-3c95d5e8d7c7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=300&fit=crop'
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
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
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </button>
          
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
            <PhoneCall className="w-4 h-4 mr-2" />
            Call Now
          </button>
          
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};
export default BusinessListing