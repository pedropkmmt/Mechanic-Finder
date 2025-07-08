import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Get in Touch</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Live chat</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">How it works</a></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Our Brands</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Toyota</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Porsche</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Audi</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">BMW</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Ford</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Nissan</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Peugeot</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Volkswagen</a></li>
            </ul>
          </div>
          
          {/* Sale Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Sale Hours</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">Monday - Friday: 09:00AM - 09:00 PM</li>
              <li className="text-sm text-gray-600">Saturday: 09:00AM - 07:00PM</li>
              <li className="text-sm text-gray-600">Sunday: Closed</li>
            </ul>
            
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 example.com. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;