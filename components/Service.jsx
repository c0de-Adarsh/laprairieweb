import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function LaPrairieServices() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      
      {/* Live Chat Button - Top Right */}
     

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-gray-700 text-2xl lg:text-3xl font-normal tracking-[0.15em] uppercase">
            OUR SERVICES
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Service 1 - Complimentary Samples */}
          <div className="text-left space-y-6">
            {/* Service Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/s1.jpg"
                alt="La Prairie complimentary samples with blue products and lake background"
                className="w-full h-[320px] lg:h-[360px] object-cover"
              />
            </div>

            {/* Service Content */}
            <div className="space-y-4">
              <h2 className="text-gray-600 text-lg lg:text-xl font-normal tracking-wide uppercase">
                COMPLIMENTARY SAMPLES
              </h2>
              
              <p className="text-gray-500 text-sm lg:text-base font-light leading-relaxed">
                Enjoy exclusive complimentary samples from our iconic range with each order.
              </p>
              
              <button className="text-gray-500 text-sm lg:text-base font-light tracking-wide uppercase hover:text-gray-700 transition-colors duration-300 border-b border-transparent hover:border-gray-500 pb-1">
                DISCOVER
              </button>
            </div>
          </div>

          {/* Service 2 - Skincare Consultation */}
          <div className="text-left space-y-6">
            {/* Service Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/s2.jpg"
                alt="Woman applying skincare product to face for consultation"
                className="w-full h-[320px] lg:h-[360px] object-cover"
              />
            </div>

            {/* Service Content */}
            <div className="space-y-4">
              <h2 className="text-gray-600 text-lg lg:text-xl font-normal tracking-wide uppercase">
                SKINCARE CONSULTATION
              </h2>
              
              <p className="text-gray-500 text-sm lg:text-base font-light leading-relaxed">
                Personalized online or in-store consultations to meet all your needs and gifting queries.
              </p>
              
              <button className="text-gray-500 text-sm lg:text-base font-light tracking-wide uppercase hover:text-gray-700 transition-colors duration-300 border-b border-transparent hover:border-gray-500 pb-1">
                BOOK NOW
              </button>
            </div>
          </div>

          {/* Service 3 - Fast Delivery */}
          <div className="text-left space-y-6">
            {/* Service Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/s3.jpg"
                alt="La Prairie luxury packaging box for fast delivery service"
                className="w-full h-[320px] lg:h-[360px] object-cover"
              />
            </div>

            {/* Service Content */}
            <div className="space-y-4">
              <h2 className="text-gray-600 text-lg lg:text-xl font-normal tracking-wide uppercase">
                FAST DELIVERY
              </h2>
              
              <p className="text-gray-500 text-sm lg:text-base font-light leading-relaxed">
                Discover our different delivery options including next day business delivery.
              </p>
              
              <button className="text-gray-500 text-sm lg:text-base font-light tracking-wide uppercase hover:text-gray-700 transition-colors duration-300 border-b border-transparent hover:border-gray-500 pb-1">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gray-400 hover:bg-gray-500 transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}