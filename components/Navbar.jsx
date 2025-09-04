import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, User, ShoppingBag, Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let ticking = false;
    
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only hide navbar if scrolled down more than 100px and scrolling down
          if (currentScrollY > 100 && currentScrollY > lastScrollY) {
            setShowNavbar(false);
          } 
          // Show navbar if scrolling up or at the top of the page
          else if (currentScrollY < lastScrollY || currentScrollY < 10) {
            setShowNavbar(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Add throttle to scroll event
    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    // 'COLLECTIONS',
    // 'SKINCARE', 
    // 'GIFT GUIDE',
    // 'MAKEUP',
    // 'LA PRAIRIE SERVICES',
    // 'THE HOUSE'
  ];

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        {/* Top Banner */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className=" text-white text-center py-3 text-xs font-light tracking-widest"
        >
          {/* SUBSCRIBE AND ENJOY 15% OFF YOUR FIRST ONLINE PURCHASE* */}
        </motion.div>

        {/* Main Navbar */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Row - Globe, Logo, Actions */}
            <div className="flex justify-between items-center h-16 lg:h-20">
              
              {/* Left - Globe Icon */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                {/* <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-white cursor-pointer hover:text-white/80 transition-colors duration-300" /> */}
              </motion.div>

              {/* Center - Logo */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h1 className="text-white text-xl lg:text-2xl font-light tracking-[0.3em] ml-10 cursor-pointer">
                
                </h1>
                <p className="text-white/80 text-xs font-light tracking-[0.2em] mt-0.5">
                  {/* SWITZERLAND */}
                </p>
              </motion.div>

              {/* Right - Help, User, Cart, Mobile Menu */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                {/* <span className="hidden lg:block text-white text-sm font-light cursor-pointer hover:text-white/80 transition-colors duration-300">
                  Can we help?
                </span> */}
                
                {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <User className="h-5 w-5 text-white cursor-pointer hover:text-white/80 transition-colors duration-300" />
                </motion.div> */}
                
                {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <ShoppingBag className="h-5 w-5 text-white cursor-pointer hover:text-white/80 transition-colors duration-300" />
                </motion.div> */}

                {/* Mobile Menu Button */}
                {/* <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-white"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button> */}
              </div>
            </div>

            {/* Bottom Row - Navigation Menu (Desktop) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-white text-sm font-light tracking-wide hover:text-white/80 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
              
              {/* Search Bar */}
            
            </motion.div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10"
              >
                <div className="px-4 py-6 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-white text-sm font-light tracking-wide hover:text-white/80 transition-colors duration-300 py-2"
                    >
                      {item}
                    </a>
                  ))}
                  <div className="pt-4">
                    {/* <div className="relative">
                      <input
                        type="text"
                        placeholder="SEARCH"
                        className="w-full bg-transparent border border-white/30 text-white placeholder-white/70 py-3 px-4 focus:border-white focus:outline-none text-sm tracking-wide"
                      />
                      <Search className="absolute right-3 top-3 h-4 w-4 text-white/70" />
                    </div> */}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;