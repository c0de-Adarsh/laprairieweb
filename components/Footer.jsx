// components/Footer.js
import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  return (
    <footer className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Can We Help Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 tracking-wide">
              CAN WE HELP?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Please get in touch by phone or email
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">+1 800 821 5718</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white border border-gray-300 rounded flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <a href="#" className="text-gray-700 font-medium underline hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </div>
              
             
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 tracking-wide">
              SUBSCRIBE
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Subscribe and embark on a timeless beauty journey and enjoy 15% off your first{' '}
                <span className="underline">online purchase</span>* above $ 350.
              </p>
              
              <div className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pb-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:outline-none focus:ring-0 text-sm"
                  />
                </div>
                
                <button className="w-full bg-gray-400 text-white py-4 px-6 font-medium text-sm tracking-wider hover:bg-gray-500 transition-colors duration-200">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Find A Store Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 tracking-wide">
              FIND A STORE
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Find your nearest store and enjoy our expert services.
            </p>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pb-3 pr-10 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:outline-none focus:ring-0 text-sm"
              />
              <MapPin className="absolute right-0 bottom-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        {/* <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
            <div>
              <h4 className="font-medium text-gray-900 mb-6 tracking-wide">ABOUT</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Collections</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Skincare</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Makeup</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Exclusives</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">The House</a></li>
              </ul>
            </div>

           
            <div>
              <h4 className="font-medium text-gray-900 mb-6 tracking-wide">SUPPORT</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Client Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Secure Payments</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Shipping and Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Order Tracking</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Store locator</a></li>
              </ul>
            </div>

           
            <div>
              <h4 className="font-medium text-gray-900 mb-6 tracking-wide">LA PRAIRIE</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Create My Account</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Subscribe</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Corporate</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Imprint</a></li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-medium text-gray-900 mb-6 tracking-wide">LEGAL</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Cookie policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms and conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Accessibility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Do not sell or share my personal information</a></li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>

      {/* Live Chat Button */}
     
    </footer>
  );
}