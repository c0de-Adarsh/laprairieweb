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
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
        
        {/* Main Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between h-full">
          
          {/* Left Side - Product Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0"
          >
           
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8"
          >
            
            {/* Main Heading */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 lg:mb-6 tracking-wide leading-tight"
            >
              Most Premium<br />
              <span className="block">skincare</span>
              <span className="block">Swiss Made</span>
            </motion.h1>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 lg:mt-12"
            >
              <p className="text-white/90 text-sm md:text-base lg:text-lg mb-2 font-light">
                Order and
              </p>
              <p className="text-white/90 text-sm md:text-base lg:text-lg mb-4 font-light">
                life Chat
              </p>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-medium tracking-wider">
                +41 78 222 44 00
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Card />
      {/* <SccondCard /> */}
      <OurService />
      <Footer />
    </div>
  );
}