import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Features from '@/components/Features'
import Latest from '@/components/Latest'
import Collection from '@/components/Collection'   

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)

  const products = [
    {
      id: 1,
      step: "STEP 1 - PREPARE",
      title: "PURE GOLD REVITALIZING ESSENCE",
      image: "/img6.jpg"
    },
    {
      id: 2,
      step: "STEP 2 - TREAT", 
      title: "PURE GOLD RADIANCE CONCENTRATE",
      image: "/img5.jpg"
    },
    
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            
            {/* Left Content */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="text-4xl lg:text-4xl xl:text-4xl font-light text-gray-800 leading-tight">
                  EXPERIENCE THE PURE
                  <br />
                  <span className="text-amber-600">GOLD RITUAL</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed font-light max-w-md">
                  Densify and nourish your skin, step by step.
                </p>
              </motion.div>
            </div>

            {/* Right Content - Products */}
            <div className="w-full overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Product Image Container - Exact beige color from image */}
                    <div className="bg-[#E8E2D5] mb-8 aspect-square overflow-hidden flex items-center justify-center p-8">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="text-center space-y-3">
                      <motion.p 
                        className="text-sm font-medium text-gray-700 tracking-wider uppercase"
                        animate={{ 
                          opacity: activeStep === index ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {product.step}
                      </motion.p>
                      
                      <motion.h3 
                        className="text-sm font-light text-gray-600 leading-tight tracking-wide uppercase"
                        animate={{ 
                          opacity: activeStep === index ? 1 : 0.7
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {product.title}
                      </motion.h3>
                    </div>

                    {/* Active Step Indicator Line - Only for first product */}
                    {index === 0 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-0.5 bg-gray-800 mt-6 mx-auto"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Latest />
      <Collection />
    </div>
  )
}