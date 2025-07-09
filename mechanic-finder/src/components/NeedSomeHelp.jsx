import { Star } from "lucide-react";

const NeedSomeHelp = () => {
  const serviceTypes = [
    "Oil Changes", "Brake Service", "Transmission", "Engine Repair", "Diagnostics", "Electrical"
  ];

  const reviews = [
    { platform: "Trustpilot", rating: 5, reviewCount: "5,800+ reviews", logo: "★" },
    { platform: "Google", rating: 5, reviewCount: "6,200+ reviews", logo: "G" },
    { platform: "Birdie", rating: 4.5, reviewCount: "3,400+ reviews", logo: "B" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Need Some Help?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Popular services our customers love
          </p>
        </div>
        
        {/* Service Type Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16">
          {serviceTypes.map((service, index) => (
            <span
              key={index}
              className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium text-slate-700 hover:bg-white hover:border-blue-300 hover:shadow-lg cursor-pointer transition-all duration-300"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Blue Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - About Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                About MechanicFinder
              </h3>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                We connect you with skilled, certified mechanics in your area. Our platform ensures quality service, fair pricing, and reliable repairs for your vehicle.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                Get Started Today
              </button>
            </div>

            {/* Right Side - Review Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mt-8 lg:mt-0">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/20">
                  <div className="text-sm sm:text-lg font-bold text-slate-800 mb-2 sm:mb-3">Excellent</div>
                  <div className="flex justify-center mb-2 sm:mb-3 gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <div className="text-xs text-slate-600 mb-3 sm:mb-4">
                    {review.reviewCount}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-md">
                      {review.logo}
                    </div>
                    <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-semibold text-slate-700">
                      {review.platform}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedSomeHelp;