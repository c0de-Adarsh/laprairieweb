"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    'COLLECTIONS',
    'SKINCARE', 
    'GIFT GUIDE',
    'MAKEUP',
    'LA PRAIRIE SERVICES',
    'THE HOUSE'
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-xs sm:text-sm">
        <span>SUBSCRIBE AND ENJOY 15% OFF YOUR FIRST ONLINE PURCHASE*</span>
      </div>

      {/* Main Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Left Section - Globe Icon (Desktop) */}
            <div className="hidden lg:flex items-center">
              <Globe className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Center Navigation (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white hover:text-gray-300 text-sm font-light tracking-wider transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Logo (Center on Mobile) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
            >
              <div className="text-center">
                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-light tracking-[0.2em]">
                  LA PRAIRIE
                </h1>
                <p className="text-white/80 text-xs tracking-[0.3em] mt-1">
                  SWITZERLAND
                </p>
              </div>
            </motion.div>

            {/* Right Section */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Help Text (Desktop) */}
              <div className="hidden lg:block text-white text-sm">
                Can we help?
              </div>
              
              {/* Search Bar (Desktop) */}
              <div className="hidden lg:flex items-center bg-white/10 rounded border border-white/20 px-3 py-2 min-w-[200px]">
                <input
                  type="text"
                  placeholder="SEARCH"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white/70 text-sm flex-1 outline-none"
                />
                <Search className="w-4 h-4 text-white/70 ml-2" />
              </div>

              {/* Search Icon (Mobile) */}
              <Search className="lg:hidden w-5 h-5 text-white cursor-pointer" />
              
              {/* User and Cart Icons */}
              <User className="w-5 h-5 lg:w-6 lg:h-6 text-white cursor-pointer hover:text-gray-300 transition-colors" />
              <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6 text-white cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-md"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-white/10 rounded border border-white/20 px-3 py-2 mb-4">
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent text-white placeholder-white/70 text-sm flex-1 outline-none"
              />
              <Search className="w-4 h-4 text-white/70 ml-2" />
            </div>
            
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block text-white text-lg font-light tracking-wider py-2 border-b border-white/10 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            
            {/* Mobile Globe */}
            <div className="flex items-center justify-center pt-4">
              <Globe className="w-6 h-6 text-white cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}