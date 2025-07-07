import React, { useState } from 'react';
import { Phone, Menu, X, User,Wrench } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-slate-800">MechanicFinder</h1>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">+27 813 456 789</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="flex gap-8 text-slate-700">
                <a href="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/basic" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Find Mechanics
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                
                <a href="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors font-semibold relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </nav>
            
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/auth">
              <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-semibold px-4 py-2 rounded-xl hover:bg-blue-50">
                <User className="w-4 h-4" />
                Sign In
              </button>
              </Link>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Join as Mechanic
              </button>
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
                <a href="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Home</a>
                <a href="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Find Mechanics</a>
                <a href="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Services</a>
                <a href="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">About</a>
                <a href="#" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Contact</a>
              </nav>
              <div className="pt-4 border-t border-white/20 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2 rounded-xl hover:bg-blue-50">
                  <User className="w-4 h-4" />
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg">
                  Join as Mechanic
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;