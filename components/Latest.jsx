import React from 'react';

const LimitedEditionSet = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-700 tracking-[0.2em]">
            LIMITED EDITION SET
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Small Label */}
            <p className="text-xs text-gray-500 tracking-[0.15em] font-medium uppercase">
              LIMITED EDITION ONLINE EXCLUSIVE
            </p>

            {/* Product Title */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-normal text-gray-700 tracking-wide">
                NEW SUMMER WARDROBE
              </h3>
              <h4 className="text-xl md:text-2xl font-normal text-gray-700 tracking-wide">
                SKIN REFRESHING AND FIRMING SET
              </h4>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                La Prairie has curated the perfect summer wardrobe for your skin into an 
                exclusive set. Discover four summer skin essentials in travel-friendly 
                formats to cleanse, firm and refresh on-the-go. Available for a limited 
                time only.
              </p>
            </div>

            {/* Shop Now Button */}
            <div className="pt-4">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-200">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Blue Background Container */}
              <div className=" ">
                <div className="relative">
                  <img
                    src="/img10.jpg"
                    alt="La Prairie Summer Wardrobe Set"
                    className="w-full h-[400px] object-contain rounded-sm"
                    style={{ maxWidth: '450px', maxHeight: '300px' }}
                  />
                  
                  {/* Product Set Overlay Effect */}
                
                </div>
              </div>
              
              {/* Optional: Add some decorative elements to match luxury feel */}
            
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            gap: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .max-w-7xl {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .tracking-\\[0\\.2em\\] {
            letter-spacing: 0.15em;
          }
        }
      `}</style>
    </div>
  );
};

export default LimitedEditionSet;