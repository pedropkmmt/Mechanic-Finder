import React, { useState } from 'react';
import { Phone, Menu, X, User } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo*/}
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0">
                                <h1 className="text-xl font-bold text-gray-900">MechanicHub</h1>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-blue-600" />
                                <span className="font-medium">+27 813 456 789</span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <div className="flex gap-8 text-gray-700">
                                <a href="#" className="hover:text-blue-600 transition-colors font-medium">Home</a>
                                <a href="#" className="hover:text-blue-600 transition-colors font-medium">Listings</a>
                                <a href="#" className="hover:text-blue-600 transition-colors font-medium">Blog</a>
                                <a href="#" className="hover:text-blue-600 transition-colors font-medium">Pages</a>
                                <a href="#" className="hover:text-blue-600 transition-colors font-medium">About</a>
                                <a href="#" className="hover:text-blue-600 transition-colors font-medium">Contact</a>
                            </div>
                        </nav>
                        <div className="hidden lg:flex items-center gap-4">
                            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                <User className="w-4 h-4" />
                                Sign In
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white">
                        <div className="px-4 py-4 space-y-4">
                            <div className="sm:hidden flex items-center gap-2 text-sm text-gray-600 pb-4 border-b border-gray-100">
                                <Phone className="w-4 h-4 text-blue-600" />
                                <span className="font-medium">+27 813 456 789</span>
                            </div>
                            <nav className="space-y-3">
                                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Home</a>
                                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Listings</a>
                                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Blog</a>
                                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Pages</a>
                                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">About</a>
                                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Contact</a>
                            </nav>
                            <div className="pt-4 border-t border-gray-100 space-y-3">
                                <button className="w-full flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                                    <User className="w-4 h-4" />
                                    Sign In
                                </button>
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-sm">
                                    Submit Listing
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