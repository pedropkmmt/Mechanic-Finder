import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const BookingSuccessPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-700 mb-6">
          Your booking was successful
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            A confirmation email has been sent to your registered email address with all the booking details.
          </p>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
          View Booking Details
        </button>
        
        <div className="mt-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BookingSuccessPage