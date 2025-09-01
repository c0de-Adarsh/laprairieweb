import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Card from '@/components/Card';
import SccondCard from '@/components/SccondCard';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import OurService from '@/components/OurService';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
             
      {/* Hero Section */}
      <div className="relative min-h-[150vh] flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
                 
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/new.jpg"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-90"
            priority
          />
        </div>

        {/* Background Image - Mobile */}
        <div className="absolute inset-0 z-0 block md:hidden">
          <Image
            src="/responsive.jpg"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-90"
            priority
          />
        </div>
 
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
 
        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
                     
          {/* Product Image Placeholder */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 lg:mb-12"
          >
                     
          </motion.div>
           
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 lg:mb-8 tracking-wide leading-tight"
          >
            DENSIFY AND NOURISH YOUR SKIN
          </motion.h1>
           
          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-white/90 mb-8 lg:mb-12 font-light tracking-widest"
          >
            DISCOVER THE NEW PURE GOLD COLLECTION
          </motion.p>
           
          {/* CTA Button */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{
               scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 hover:bg-white text-black font-medium py-3 lg:py-4 px-8 lg:px-12 text-sm tracking-widest transition-all duration-300 backdrop-blur-sm"
          >
            SHOP NOW
          </motion.button>
        </div>
      </div>

      <Card />
      {/* <SccondCard /> */}
      <OurService />
      <Footer />
           
    </div>
  );
}