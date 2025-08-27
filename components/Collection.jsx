import React from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function LaPrairieShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      {/* Live Chat Button - Top Right */}
    

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 space-y-6 lg:pt-12">
            <h1 className="text-gray-600 text-md font-normal tracking-[0.25em] uppercase">
              OUR LIGHTWEIGHT CREATIONS
            </h1>
            
            <p className="text-gray-600 text-base font-light leading-relaxed max-w-sm">
              Embrace the heat of summer with La Prairie's Skin Caviar creations, revealing transformative, light textures that range from airy and silky to ultra-fine, for indulgent results.
            </p>
          </div>

          {/* Center Column - Product 1 */}
          <div className="lg:col-span-4 text-center">
            {/* Product Image */}
            <div className="relative mb-16 flex justify-center">
              <img 
                src="/img11.jpg"
                alt="Skin Caviar The Mist - Blue bottle with white jar"
                className="w-[350px] h-[280px] lg:w-[400px] lg:h-[320px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <h2 className="text-gray-800 text-lg font-normal tracking-wide">
                SKIN CAVIAR THE MIST
              </h2>
              <p className="text-gray-500 text-sm font-light tracking-[0.2em] uppercase">
                REFRESHING
              </p>
            </div>
          </div>

          {/* Right Column - Product 2 */}
          <div className="lg:col-span-4 text-center">
            {/* Product Image */}
            <div className="relative mb-16 flex justify-center">
              <img 
                src="/img12.jpg"
                alt="Skin Caviar Hydro Emulsion - Blue bottle with white jar"
                className="w-[350px] h-[280px] lg:w-[400px] lg:h-[320px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <h2 className="text-gray-800 text-lg font-normal tracking-wide">
                SKIN CAVIAR HYDRO EMULSION
              </h2>
              <p className="text-gray-500 text-sm font-light tracking-[0.2em] uppercase">
                HYDRATING
              </p>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div className="lg:col-span-1"></div>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-24 mb-8">
          <div className="h-[1px] bg-gray-300 w-full"></div>
        </div>
      </div>

      {/* Scroll to Top Button - Bottom Right */}
      
    </div>
  );
}