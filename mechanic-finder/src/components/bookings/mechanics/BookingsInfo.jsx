import { useState } from 'react';
import { Calendar, Clock, User, Car, Wrench, CheckCircle, AlertCircle } from 'lucide-react';

const MechanicBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample booking data
  const bookings = {
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
        totalCost: "R2850"
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
        totalCost: "R850"
      }
    ]
  };

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', icon: Calendar, count: bookings.upcoming.length },
    { id: 'inProgress', label: 'In Progress', icon: Clock, count: bookings.inProgress.length },
    { id: 'awaitingResponse', label: 'Awaiting Response', icon: AlertCircle, count: bookings.awaitingResponse.length },
    { id: 'past', label: 'Past', icon: CheckCircle, count: bookings.past.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'awaiting': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
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
          <div className="bg-blue-50 rounded-lg p-3 mt-3">
            <span className="text-sm font-medium text-blue-700">Estimated Cost: {booking.estimatedCost}</span>
          </div>
        )}

        {booking.totalCost && (
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <span className="text-sm font-medium text-green-700">Total Cost: {booking.totalCost}</span>
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
            <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300">
              Mark Complete
            </button>
            <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
              Update Status
            </button>
          </>
        )}
        
        {booking.status === 'completed' && (
          <button className="w-full bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
            View Details
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Mechanic Dashboard
          </h1>
          <p className="text-xl text-slate-600">
            Manage your bookings and customer services
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm border border-white/20 text-slate-700 hover:bg-white hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl border border-blue-500/20">
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
    </div>
  );
};

export default MechanicBookings;