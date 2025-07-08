import React, { useState } from 'react';
import { Phone, Menu, X, User, Wrench, ChevronDown, LogOut, Settings, Bell } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ isAuthenticated, userInfo, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
    setIsProfileDropdownOpen(false);
    navigate('/');
  };

  const handleProfileClick = () => {
    if (userInfo?.userType === 'customer') {
      navigate('/profile');
    } else if (userInfo?.userType === 'mechanic') {
      navigate('');
    }
    setIsProfileDropdownOpen(false);
  };

  const handleBookingsClick = () => {
    setIsProfileDropdownOpen(false);
    navigate('/bookings');
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo*/}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="flex gap-8 text-slate-700">
                <Link to="/" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/map" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Find Mechanics
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/listing" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Browse Mechanics
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </nav>
            
            {/* Desktop Auth Section */}
            <div className="hidden lg:flex items-center gap-4">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-semibold px-4 py-2 rounded-xl hover:bg-blue-50"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      {userInfo?.userType === 'mechanic' ? (
                        <Wrench className="w-4 h-4 text-white" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium">
                      {userInfo?.firstName} {userInfo?.lastName}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-slate-800">
                          {userInfo?.firstName} {userInfo?.lastName}
                        </p>
                        <p className="text-xs text-slate-500">{userInfo?.email}</p>
                        <p className="text-xs text-blue-600 capitalize font-medium">
                          {userInfo?.userType}
                        </p>
                      </div>
                      <div className="py-1">
                        <button 
                          onClick={handleProfileClick}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="w-4 h-4" />
                          Profile Settings
                        </button>
                        
                        {userInfo?.userType === 'mechanic' && (
                          <button 
                            onClick={handleBookingsClick}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 transition-colors"
                          >
                            <Wrench className="w-4 h-4" />
                            My Bookings
                          </button>
                        )}
                        
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 transition-colors">
                          <Bell className="w-4 h-4" />
                          Notifications
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 transition-colors">
                          <Settings className="w-4 h-4" />
                          Settings
                        </button>
                        <hr className="my-1" />
                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/auth">
                  <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-semibold px-4 py-2 rounded-xl hover:bg-blue-50">
                    <User className="w-4 h-4" />
                    Sign In
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <div className="sm:hidden flex items-center gap-3 text-sm text-slate-600 pb-4 border-b border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">+27 813 456 789</span>
              </div>
              
              <nav className="space-y-3">
                <Link to="/" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Home</Link>
                <Link to="/map" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Find Mechanics</Link>
                <Link to="/listing" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Browse Mechanics</Link>
                <Link to="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Services</Link>
                <Link to="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">About</Link>
                <Link to="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Contact</Link>
              </nav>
              
              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-white/20 space-y-3">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        {userInfo?.userType === 'mechanic' ? (
                          <Wrench className="w-5 h-5 text-white" />
                        ) : (
                          <User className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">
                          {userInfo?.firstName} {userInfo?.lastName}
                        </p>
                        <p className="text-xs text-slate-500">{userInfo?.email}</p>
                        <p className="text-xs text-blue-600 capitalize font-medium">
                          {userInfo?.userType}
                        </p>
                      </div>
                    </div>
                    
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2 px-3 rounded-xl hover:bg-blue-50">
                        <User className="w-4 h-4" />
                        Profile Settings
                      </button>
                    </Link>
                    
                    {userInfo?.userType === 'mechanic' && (
                      <Link to="/bookings" onClick={() => setIsMenuOpen(false)}>
                        <button className="w-full flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2 px-3 rounded-xl hover:bg-blue-50">
                          <Wrench className="w-4 h-4" />
                          My Bookings
                        </button>
                      </Link>
                    )}
                    
                    <button className="w-full flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2 px-3 rounded-xl hover:bg-blue-50">
                      <Bell className="w-4 h-4" />
                      Notifications
                    </button>
                    <button className="w-full flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2 px-3 rounded-xl hover:bg-blue-50">
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 text-red-600 hover:text-red-700 transition-colors font-semibold py-2 px-3 rounded-xl hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <>
                    <Link to="/auth">
                      <button className="w-full flex items-center justify-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2 rounded-xl hover:bg-blue-50">
                        <User className="w-4 h-4" />
                        Sign In
                      </button>
                    </Link>
                    <Link to="/auth">
                      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg">
                        Join as Mechanic
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;