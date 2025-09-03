import React from 'react';
import { Truck, Package, Users } from 'lucide-react';
import Image from 'next/image';

const EBoutiqueServices = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wide">
            E-BOUTIQUE SERVICES
          </h2>
        </div>

        {/* Services Grid - Centered for single item */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Complimentary Delivery */}
            {/* <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg  flex items-center justify-center">
                   <Image
        src="ss2.svg"
        alt="Package"
        width={60}
        height={60}
        className="text-gray-600"
      />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 tracking-wide">
                COMPLIMENTARY DELIVERY
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Enjoy free delivery and effortless returns within 30 days
              </p>
            </div> */}

            {/* Complimentary Samples */}
            {/* <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg  flex items-center justify-center">
                  <Image
        src="ss1.svg"
        alt="Package"
        width={80}
        height={80}
        className="text-gray-600"
      />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 tracking-wide">
                COMPLIMENTARY SAMPLES
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Receive an assortment of samples with every purchase
              </p>
            </div> */}

            {/* Online Consultation - Centered */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                  <Image
                    src="ss3.svg"
                    alt="Package"
                    width={80}
                    height={80}
                    className="text-gray-600"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 tracking-wide">
                ONLINE CONSULTATION
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 px-4 sm:px-0">
                Book a one-on-one consultation with a Beauty Advisor
              </p>
              <button className="bg-transparent border border-gray-400 text-gray-700 px-6 sm:px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 ease-in-out w-full sm:w-auto">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBoutiqueServices;