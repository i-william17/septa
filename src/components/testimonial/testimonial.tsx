'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const { left, top } = document.querySelector('#testimonials-section').getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.1), transparent 80%)`;

  const testimonials = [
    {
      id: 1,
      name: "Amara Diallo",
      role: "CTO, AfriPay",
      content: "SeptaGreen's cybersecurity solutions transformed our payment infrastructure. Their deep understanding of African fintech challenges sets them apart from global competitors.",
      rating: 5,
      image: "/one.jpg",
      highlight: "Reduced fraud incidents by 78%"
    },
    {
      id: 2,
      name: "Kwame Osei",
      role: "Security Director, EagleBank",
      content: "Working with SeptaGreen was a game-changer for our banking security. Their team implemented robust protections without disrupting our customer experience.",
      rating: 5,
      image: "/testimonials/kwame.jpg",
      highlight: "Achieved 100% compliance"
    },
    {
      id: 3,
      name: "Nia Adebayo",
      role: "Head of IT, SA Telecom",
      content: "The only security partner that truly understands Africa's unique digital landscape. Their 24/7 SOC has prevented multiple potential breaches for our 10M+ users.",
      rating: 4,
      image: "/testimonials/nia.jpg",
      highlight: "Prevented 12 major attacks"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      id="testimonials-section"
      className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background }}
      />

      {/* Animated African pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="african-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0,0 L120,0 L120,20 L0,20 Z" fill="#10B981" />
            <path d="M0,20 L120,20 L120,40 L0,40 Z" fill="#3B82F6" />
            <path d="M0,40 L120,40 L120,60 L0,60 Z" fill="#10B981" />
            <path d="M0,60 L120,60 L120,80 L0,80 Z" fill="#3B82F6" />
            <path d="M0,80 L120,80 L120,100 L0,100 Z" fill="#10B981" />
            <path d="M0,100 L120,100 L120,120 L0,120 Z" fill="#3B82F6" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#african-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">Africa's Best</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hear from leaders who've experienced our cybersecurity excellence
          </motion.p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: '#10B981', color: 'white' }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#10B981] text-[#10B981] transition-all"
          >
            <FiChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: '#3B82F6', color: 'white' }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#3B82F6] text-[#3B82F6] transition-all"
          >
            <FiChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Testimonial cards */}
          <div className="relative h-[500px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 ${index === activeIndex ? 'z-10' : 'z-0'}`}
                initial={{ 
                  opacity: 0,
                  x: index > activeIndex ? 100 : -100,
                  scale: 0.9
                }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : (index > activeIndex ? 100 : -100),
                  scale: index === activeIndex ? 1 : 0.9
                }}
                transition={{ 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiStar 
                          className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <blockquote className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Highlight badge */}
                  <motion.div
                    className="mb-8 px-4 py-2 bg-[#10B981]/10 rounded-full inline-flex items-center"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-sm font-medium text-[#10B981]">
                      {testimonial.highlight}
                    </span>
                  </motion.div>
                  
                  {/* Author */}
                  <div className="mt-auto flex items-center gap-6">
                    <motion.div
                      className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#10B981]"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-8 right-8 text-7xl text-[#10B981] opacity-10 font-serif">
                    "
                  </div>
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#3B82F6]/10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-[#10B981]' : 'bg-gray-300'}`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
          ))}
        </div>

        {/* Animated Cultural divider */}
        <motion.div 
          className="flex justify-center space-x-2 pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-1 rounded-full ${i % 3 === 0 ? 'bg-[#10B981] w-8' : i % 2 === 0 ? 'bg-[#3B82F6] w-4' : 'bg-gray-900 w-2'}`}
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