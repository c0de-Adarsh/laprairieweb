import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SummerBestSellers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      image: "/img7.webp",
      badge: "NEW",
      title: "SKIN CAVIAR",
      subtitle: "THE MIST",
      tags: ["HYDRATING", "REFRESHING", "SMOOTHING"],
      description: "REFRESHING, ENERGISING AND SMOOTHING FACE MIST"
    },
    {
      id: 2,
      image: "/img8.webp",
      badge: "NEW",
      title: "SKIN CAVIAR",
      subtitle: "HYDRO EMULSION",
      tags: ["ANTI-WRINKLES", "FIRMING", "HYDRATING"],
      description: "LINE-EFFACING AND FIRMING EMULSION"
    },
    {
      id: 3,
      image: "/img9.webp",
      badges: ["NEW", "LIMITED EDITION"],
      title: "LA PRAIRIE",
      subtitle: "SUMMER WARDROBE",
      tags: ["FIRMING", "HYDRATING", "REFRESHING"],
      description: "SKIN REFRESHING AND FIRMING RITUAL"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="bg-white  py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 tracking-wider">
            SUMMER BEST SELLERS
          </h2>
        </div>

        {/* Products Grid */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="text-center group">
                {/* Product Image Container */}
                <div className="relative mb-8 bg-white p-8 flex items-center justify-center" style={{minHeight: '400px'}}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.badges ? (
                      product.badges.map((badge, i) => (
                        <span 
                          key={i}
                          className="bg-gray-700 text-white text-xs px-3 py-1 font-medium tracking-wider"
                        >
                          {badge}
                        </span>
                      ))
                    ) : (
                      <span className="bg-gray-700 text-white text-xs px-3 py-1 font-medium tracking-wider">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-light text-gray-800 tracking-wider">
                      {product.title}
                    </h3>
                    <h4 className="text-lg font-light text-gray-800 tracking-wider">
                      {product.subtitle}
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-px bg-gray-300 mx-auto"></div>

                  {/* Tags */}
                  <div className="flex justify-center gap-4 text-xs text-gray-500 tracking-wider">
                    {product.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 tracking-wide max-w-xs mx-auto leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="text-center group max-w-sm mx-auto">
                    {/* Product Image Container */}
                    <div className="relative mb-8 bg-white p-6 flex items-center justify-center" style={{minHeight: '300px'}}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {product.badges ? (
                          product.badges.map((badge, i) => (
                            <span 
                              key={i}
                              className="bg-gray-700 text-white text-xs px-2 py-1 font-medium tracking-wider"
                            >
                              {badge}
                            </span>
                          ))
                        ) : (
                          <span className="bg-gray-700 text-white text-xs px-2 py-1 font-medium tracking-wider">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-base font-light text-gray-800 tracking-wider">
                          {product.title}
                        </h3>
                        <h4 className="text-base font-light text-gray-800 tracking-wider">
                          {product.subtitle}
                        </h4>
                      </div>

                      {/* Divider */}
                      <div className="w-12 h-px bg-gray-300 mx-auto"></div>

                      {/* Tags */}
                      <div className="flex justify-center gap-3 text-xs text-gray-500 tracking-wider">
                        {product.tags.map((tag, i) => (
                          <span key={i}>{tag}</span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 tracking-wide leading-relaxed px-4">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerBestSellers;