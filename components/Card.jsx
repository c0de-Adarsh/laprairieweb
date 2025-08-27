import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import SccondCard from './SccondCard';

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Product Section */}
      <div className="pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Product Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide">
              NEW PURE GOLD REVITALIZING ESSENCE
            </h1>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 lg:pr-8"
            >
              
              {/* NEW Badge */}
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-600 tracking-widest">
                  NEW
                </span>
              </div>

              {/* Product Headline */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed">
                RESTORES RADIANCE AND SOOTHES
              </h2>

              {/* Product Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                The first soothing solution designed to help skin counteract the visible effects 
                induced by hormonal changes. The lightweight golden essence provides 
                immediate soothing relief, intense hydration, and enhanced radiance.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#4a5568'
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-4 px-8 text-sm tracking-widest transition-all duration-300 mt-8"
              >
                SHOP THE NEWNESS
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative md:w-[110%] h-96 md:h-[500px] lg:h-[600px]">
                <Image
                  src="/img2.jpg"
                  alt="Model with Pure Gold Revitalizing Essence"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-sm"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Additional Product Features */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            
            {/* Feature 1 */}
           

            {/* Feature 2 */}
           

            {/* Feature 3 */}
           
          </motion.div>

          {/* Bottom CTA Section */}
        
        </div>
        
      </div>
     
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Product Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide">
              EXPERIENCE HIGH LONGEVITY SCIENCE
            </h1>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 lg:pr-8"
            >
              
              {/* Product Headline */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed">
                LIFE MATRIX HAUTE REJUVENATION YOUTH LONGEVITY FACE CREAM
              </h2>

              {/* Product Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                Your skin's future is reimagined. Stronger, more resilient and beautifully 
                timeless. Unlock your Skin Longevity Matrix, La Prairie's first 
                comprehensive framework dedicated to prolonging skin's youthful 
                appearance.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#4a5568'
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-4 px-8 text-sm tracking-widest transition-all duration-300 mt-8"
              >
                SHOP NOW
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative md:w-[110%] h-96 md:h-[500px] lg:h-[600px]">
                              <Image
                                src="/img3.jpg"
                                alt="Model with Pure Gold Revitalizing Essence"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="rounded-sm"
                                priority
                              />
                            </div>
            </motion.div>
          </div>

          {/* Bottom Indicator Dot */}
       

          {/* Additional Product Benefits Section */}
         
          {/* Bottom CTA Section */}
        
        </div>
      </div>
       <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl ">
          
          {/* Product Image Section */}
          <div className="flex-1 relative lg:ml-10">
            <div className="relative overflow-hidden shadow-2xl group">
              {/* High-quality image without rounded corners */}
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <img
                  src="/img4.jpg"
                  alt="Luxury gold skincare products on elegant surface"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-2xl lg:text-4xl font-light text-stone-600 mb-8 lg:mb-12 tracking-wide leading-relaxed">
              A LIMITED-TIME INDULGENCE
            </h1>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-8 lg:mb-12 font-light">
              Complete your Pure Gold ritual with a radiant finishing touch — receive a 
              miniature Pure Gold Radiance Cream as our gift with the purchase of the 
              new Pure Gold Revitalizing Essence.
            </p>
            
            {/* CTA Button */}
            <button className="bg-gray-700 hover:bg-stone-800 text-white font-medium px-8 lg:px-12 py-4 lg:py-5 transition-all duration-300 transform hover:scale-105 hover:shadow-xl tracking-wider text-sm lg:text-base">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle floating particles animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
    </div>
  );
}