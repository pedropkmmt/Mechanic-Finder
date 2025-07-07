import React, { useState, useEffect } from 'react';

const AccountCreationLoading = () => {
  const [dots, setDots] = useState('');
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    // Simulate account creation
    const timeout = setTimeout(() => {
      setShowCheckmark(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-center">
          <div className="flex items-center justify-center space-x-3">
            {!showCheckmark ? (
              <>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <div className="text-lg">
                  Please wait while we create your account{dots}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3 animate-pulse">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-lg">
                  Account created successfully!
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Additional loading elements */}
        <div className="mt-6 space-y-3">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${showCheckmark ? 'bg-green-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'} transition-all duration-500`}>
                {showCheckmark && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-gray-700">Setting up your profile</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${showCheckmark ? 'bg-green-500' : 'bg-gray-300'} transition-all duration-500 delay-500`}>
                {showCheckmark && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-gray-700">Configuring preferences</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${showCheckmark ? 'bg-green-500' : 'bg-gray-300'} transition-all duration-500 delay-1000`}>
                {showCheckmark && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-gray-700">Finalizing setup</span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-4000 ease-out"
            style={{ 
              width: showCheckmark ? '100%' : '0%',
              transition: 'width 4s ease-out'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreationLoading;