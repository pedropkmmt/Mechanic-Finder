import React from 'react';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import NavBar from '../components/Navbar';

const MechanicDetails = () => {
  return (
    <>
      <NavBar/>
      <div className="min-h-screen bg-gray-50">
        <div className="relative overflow-hidden h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
          <div className="relative z-10 px-6 py-12 h-full flex flex-col justify-center text-center text-white">
            <h1 className="text-5xl font-bold mb-4 text-shadow-lg">Mpumi Automotive</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional automotive services with certified technicians and state-of-the-art equipment
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-medium">4.9 out of 5 (127 reviews)</span>
            </div>
            
            {/* Service Hours */}
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 inline-block border border-white/20">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          {/* About Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-7 h-7 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">About Mpumi Automotive</h2>
                <span className="ml-auto text-sm bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  📍 Map View
                </span>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                For over 30 years, Mpumi Automotive has been the trusted choice for dependable car care in Germiston certified technicians specializing in comprehensive services. 
                From routine maintenance like oil changes and brake work to complex diagnostics and repairs, we handle all your automotive needs. We proudly serve families, commuters, and fleet vehicles with honest pricing, expert service, and a 12 month nationwide warranty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  📞 Call & Message
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-xl transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 font-semibold text-lg">
                  🗺️ Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Specialization Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">We Specialize In</h2>
                <p className="text-gray-600 text-lg">Certified experts for all major automotive brands</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Volkswagen */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-gray-200 p-2">
                    <img 
                      src="https://logos-world.net/wp-content/uploads/2021/03/Volkswagen-Logo.png" 
                      alt="Volkswagen Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Volkswagen</span>
                </div>

                {/* Hyundai */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-gray-200 p-2">
                    <img 
                      src="https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png" 
                      alt="Hyundai Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700 group-hover:text-gray-800 transition-colors">Hyundai</span>
                </div>

                {/* BMW */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-gray-200 p-2">
                    <img 
                      src="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" 
                      alt="BMW Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors">BMW</span>
                </div>

                {/* Nissan */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-gray-200 p-2">
                    <img 
                      src="https://logos-world.net/wp-content/uploads/2021/03/Nissan-Logo.png" 
                      alt="Nissan Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700 group-hover:text-red-600 transition-colors">Nissan</span>
                </div>

                {/* Ford */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-gray-200 p-2">
                    <img 
                      src="https://logos-world.net/wp-content/uploads/2021/03/Ford-Logo.png" 
                      alt="Ford Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-center font-medium text-gray-700 group-hover:text-blue-800 transition-colors">Ford</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-md mx-auto">
            <button className="w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              🔧 BOOK NOW
            </button>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-3 text-gray-600 bg-white rounded-xl p-4 shadow-lg">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-lg font-medium">Call us: (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MechanicDetails;