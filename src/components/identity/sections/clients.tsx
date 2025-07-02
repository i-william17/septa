'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Enhanced Client Showcase Component
export function ClientShowcase() {
  const clients = [
    { name: "AfriPay", logo: "/nobg.png" },
    { name: "EagleBank", logo: "/clients/eaglebank.svg" },
    { name: "SA Telecom", logo: "/clients/satelecom.svg" },
    { name: "NGN Health", logo: "/clients/ngnhealth.svg" },
    { name: "Kente Capital", logo: "/clients/kentecapital.svg" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0, x: Math.random() * 100 }}
            whileInView={{ opacity: 0.1, y: Math.random() * 200 - 100 }}
            transition={{ duration: 15 + Math.random() * 20, repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: true }}
            className={`absolute w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-[#10B981]' : 'bg-[#3B82F6]'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2
          className="text-xl font-medium text-center text-gray-500 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          TRUSTED BY AFRICA'S DIGITAL LEADERS
        </motion.h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="opacity-70 hover:opacity-100 transition-all relative"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={120}
                className="h-40 object-contain"
              />
              {/* Hover effect */}
              <motion.div 
                className="absolute -bottom-2 left-0 h-0.5 bg-[#10B981] w-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Cultural pattern divider */}
        <motion.div 
          className="flex justify-center space-x-2 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-1 ${i % 3 === 0 ? 'bg-[#10B981] w-8' : i % 2 === 0 ? 'bg-[#3B82F6] w-4' : 'bg-gray-900 w-2'}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}