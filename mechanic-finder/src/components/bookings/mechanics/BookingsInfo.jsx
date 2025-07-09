import { useState } from 'react';
import { Calendar, Clock, User, Car, Wrench, CheckCircle, AlertCircle, DollarSign,TrendingUp, Star } from 'lucide-react';

//card components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const MechanicDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample booking data
  const [bookings, setBookings] = useState({
    upcoming: [
      {
        id: 1,
        customerName: "Zama",
        customerSurname: "Mavuso",
        carType: "Toyota Camry 2018",
        carIssue: "Brake pads replacement and brake fluid check",
        date: "2025-07-10",
        time: "09:00 AM",
        phone: "+27 (083) 123-4567",
        status: "confirmed"
      },
      {
        id: 2,
        customerName: "Sarah",
        customerSurname: "Johnson",
        carType: "Honda Civic 2020",
        carIssue: "Oil change and general inspection",
        date: "2025-07-12",
        time: "02:30 PM",
        phone: "+27 (081) 987-6543",
        status: "confirmed"
      }
    ],
    inProgress: [
      {
        id: 3,
        customerName: "Mvelo",
        customerSurname: "Mnisi",
        carType: "Ford F-150 2019",
        carIssue: "Transmission service and diagnostics",
        date: "2025-07-08",
        time: "10:00 AM",
        phone: "+27 (079) 456-7890",
        status: "in-progress",
        estimatedCompletion: "4:00 PM"
      }
    ],
    awaitingResponse: [
      {
        id: 4,
        customerName: "Emma",
        customerSurname: "Sibanyoni",
        carType: "BMW X3 2021",
        carIssue: "Engine diagnostic - Check engine light",
        date: "2025-07-09",
        time: "11:00 AM",
        phone: "+27 (073) 234-5678",
        status: "awaiting",
        estimatedCost: "R1500 - R2000"
      },
      {
        id: 5,
        customerName: "David",
        customerSurname: "Ndlovu",
        carType: "Mercedes C-Class 2017",
        carIssue: "Electrical system malfunction",
        date: "2025-07-11",
        time: "03:00 PM",
        phone: "+27 (079) 345-6789",
        status: "awaiting",
        estimatedCost: "R2000 - R5000"
      }
    ],
    past: [
      {
        id: 6,
        customerName: "Lisa",
        customerSurname: "Anderson",
        carType: "Nissan Altima 2016",
        carIssue: "Brake service and tire rotation",
        date: "2025-07-05",
        time: "01:00 PM",
        phone: "+27 (072) 567-8901",
        status: "completed",
        totalCost: "R2850",
        rating: 5
      },
      {
        id: 7,
        customerName: "Robert",
        customerSurname: "Marawa",
        carType: "Chevrolet Malibu 2019",
        carIssue: "Oil change and filter replacement",
        date: "2025-07-03",
        time: "09:30 AM",
        phone: "+27 (079) 678-9012",
        status: "completed",
        totalCost: "R850",
        rating: 4
      },
      {
        id: 8,
        customerName: "Thandi",
        customerSurname: "Nkosi",
        carType: "Volkswagen Golf 2020",
        carIssue: "Suspension repair and alignment",
        date: "2025-07-01",
        time: "10:30 AM",
        phone: "+27 (083) 789-0123",
        status: "completed",
        totalCost: "R3200",
        rating: 5
      },
      {
        id: 9,
        customerName: "Sipho",
        customerSurname: "Dlamini",
        carType: "Audi A4 2018",
        carIssue: "Battery replacement and electrical check",
        date: "2025-06-28",
        time: "02:00 PM",
        phone: "+27 (081) 890-1234",
        status: "completed",
        totalCost: "R1500",
        rating: 4
      },
      {
        id: 10,
        customerName: "Nandi",
        customerSurname: "Zuma",
        carType: "Hyundai Tucson 2021",
        carIssue: "Tire replacement and wheel balancing",
        date: "2025-06-25",
        time: "11:00 AM",
        phone: "+27 (073) 901-2345",
        status: "completed",
        totalCost: "R2200",
        rating: 5
      }
    ]
  });

  const completedJobs = bookings.past;

  const averageRating = completedJobs.length > 0 ? 
    completedJobs.reduce((sum, job) => sum + job.rating, 0) / completedJobs.length : 0;

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', icon: Calendar, count: bookings.upcoming.length },
    { id: 'inProgress', label: 'In Progress', icon: Clock, count: bookings.inProgress.length },
    { id: 'awaitingResponse', label: 'Awaiting Response', icon: AlertCircle, count: bookings.awaitingResponse.length },
    { id: 'past', label: 'Past', icon: CheckCircle, count: bookings.past.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'in-progress': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'awaiting': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'completed': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-500 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-slate-600 ml-1">({rating}/5)</span>
      </div>
    );
  };
  const markAsComplete = (bookingId) => {
  setBookings(prevBookings => {
    const booking = prevBookings.inProgress.find(b => b.id === bookingId);
    if (!booking) return prevBookings;

    // Create completed booking with additional fields
    const completedBooking = {
      ...booking,
      status: 'completed',
      totalCost: 'R2500',
      rating: 5 //ueser rating
    };

    return {
      ...prevBookings,
      inProgress: prevBookings.inProgress.filter(b => b.id !== bookingId),
      past: [completedBooking, ...prevBookings.past]
    };
  });
};

  const BookingCard = ({ booking }) => (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
            {booking.customerName.charAt(0)}{booking.customerSurname.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              {booking.customerName} {booking.customerSurname}
            </h3>
            <p className="text-sm text-slate-600">{booking.phone}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1).replace('-', ' ')}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Car className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-slate-700 font-medium">{booking.carType}</span>
        </div>
        
        <div className="flex items-start space-x-2">
          <Wrench className="w-4 h-4 text-blue-600 mt-0.5" />
          <span className="text-sm text-slate-700">{booking.carIssue}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-slate-700">{formatDate(booking.date)} at {booking.time}</span>
        </div>
        

        {booking.estimatedCompletion && (
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-yellow-600" />
            <span className="text-sm text-slate-700">Est. completion: {booking.estimatedCompletion}</span>
          </div>
        )}

        {booking.estimatedCost && (
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
            <span className="text-xs sm:text-sm text-orange-700 font-medium">Estimated Cost: </span>
            <p className="text-sm sm:text-base text-orange-800 font-semibold">{booking.estimatedCost}</p>
            </div>
          </div>
        )}

        {booking.totalCost && (
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <span className="text-sm font-medium text-green-700">Total Cost: {booking.totalCost}</span>
          </div>
        )}

        {booking.rating && (
          <div className="bg-yellow-50 rounded-lg p-3 mt-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-yellow-700">Customer Rating:</span>
              <StarRating rating={booking.rating} />
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200 flex space-x-3">
        {booking.status === 'awaiting' && (
          <>
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              Send Quote
            </button>
            <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
              Contact Customer
            </button>
          </>
        )}
        
        {booking.status === 'confirmed' && (
          <>
            <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300">
              Start Service
            </button>
            <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
              Reschedule
            </button>
          </>
        )}
        
        {booking.status === 'in-progress' && (
          <>
            <button
            onClick={() => markAsComplete(booking.id)}
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300">
              Mark Complete
            </button>
            <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
              Update Status
            </button>
          </>
        )}
        
        {booking.status === 'completed' && (
          <>
          <button className="w-full bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
            View Details
          </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-500 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 w-80">
              <CardHeader className="pb-4 bg-white text-blue-600  rounded-t-lg">
                <CardTitle className="flex items-center justify-center gap-3 text-lg font-bold">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber fill-current" />
                  </div>
                  Average Rating
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-6">
                <div className="flex items-center justify-center mb-3">
                  <p className="text-4xl font-bold text-white mr-2">{averageRating.toFixed(1)}</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.round(averageRating)
                            ? 'text-yellow-300 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white  font-medium">Based on {completedJobs.length} completed jobs</p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-xs text-white">
                    {averageRating >= 4.5 ? "Excellent service!" : averageRating >= 4.0 ? "Great work!" : "Good job, keep improving!"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-blue-500 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 w-80">
              <CardHeader className="pb-4 bg-white text-blue-600 rounded-t-lg">
                <CardTitle className="flex items-center justify-center gap-3 text-lg font-bold">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  Monthly Jobs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-6">
                <div className="flex items-center justify-center mb-3">
                  <p className="text-4xl font-bold text-white mr-2">{(() => {
                    const now = new Date();
                    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
                    return completedJobs.filter(job => new Date(job.date) >= oneMonthAgo).length;
                  })()}</p>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-white font-medium">Jobs completed this month</p>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-xs text-white">
                    {(() => {
                      const now = new Date();
                      const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
                      const monthlyJobs = completedJobs.filter(job => new Date(job.date) >= oneMonthAgo).length;
                      return monthlyJobs >= 10 ? "Great productivity!" : monthlyJobs >= 5 ? "Good work pace!" : "Keep building momentum!";
                    })()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 backdrop-blur-md bg-white/80 rounded-2xl shadow-lg border border-white/20 px-4 py-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const getTabColor = (tabId) => {
              switch (tabId) {
                case 'upcoming': return 'from-blue-500 to-blue-600';
                case 'inProgress': return 'from-amber-500 to-amber-600';
                case 'awaitingResponse': return 'from-orange-500 to-orange-600';
                case 'past': return 'from-green-500 to-green-600';
            }
          };

          return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex flex-col items-center space-y-2 p-4 rounded-xl font-medium transition-all duration-300 group ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${getTabColor(tab.id)} text-white shadow-lg scale-105`
                        : 'bg-white/60 text-slate-700 hover:bg-white hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white/20'
                        : `bg-gradient-to-r ${getTabColor(tab.id)} text-white group-hover:scale-110`
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="text-center">
                      <span className="text-sm font-semibold block">{tab.label}</span>
                      {tab.count > 0 && (
                        <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full font-bold ${
                          activeTab === tab.id
                            ? 'bg-white/20 text-white'
                            : `bg-gradient-to-r ${getTabColor(tab.id)} text-white`
                        }`}>
                          {tab.count}
                        </span>
                      )}
                    </div>
                    
                    {activeTab === tab.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
          {bookings[activeTab].length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {bookings[activeTab].map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No bookings found</h3>
              <p className="text-blue-100">
                No {activeTab.replace(/([A-Z])/g, ' $1').toLowerCase()} bookings at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
  );
};

export default MechanicDashboard;