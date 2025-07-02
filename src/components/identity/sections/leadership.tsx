'use client';

import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiShield, FiGlobe, FiUsers, FiAward, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useEffect } from 'react';

export function LeadershipTeam() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const { left, top } = document.querySelector('#leadership-section').getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.1), transparent 80%)`;

  const team = [
    {
      name: "William Odhiambo",
      role: "Founder & CEO",
      bio: "Former head of security at Africa's largest mobile payment platform with 15+ years in cybersecurity leadership",
      image: "/one.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      stats: [
        { value: "15+", label: "Years Experience" },
        { value: "50+", label: "Team Members Led" }
      ]
    },
    {
      name: "Kwame Mensah",
      role: "Chief Technology Officer",
      bio: "AI security specialist with patents in machine learning security and blockchain protection systems",
      image: "/team/kwame.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      stats: [
        { value: "12+", label: "Tech Patents" },
        { value: "8", label: "Languages Spoken" }
      ]
    },
    {
      name: "Nia Adebayo",
      role: "Head of Operations",
      bio: "Scaling expert who has grown tech operations across three continents with focus on African markets",
      image: "/team/nia.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      stats: [
        { value: "200%", label: "Growth Achieved" },
        { value: "10+", label: "Countries Operated" }
      ]
    }
  ];

  return (
    <section 
      id="leadership-section"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background }}
      />

      {/* Animated Kente pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="kente-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="120" height="20" fill="#10B981" />
            <rect x="0" y="20" width="120" height="20" fill="#3B82F6" />
            <rect x="0" y="40" width="120" height="20" fill="#10B981" />
            <rect x="0" y="60" width="120" height="20" fill="#3B82F6" />
            <rect x="0" y="80" width="120" height="20" fill="#10B981" />
            <rect x="0" y="100" width="120" height="20" fill="#3B82F6" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#kente-pattern)" />
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visionary <span className="text-[#10B981]">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The brilliant minds shaping Africa's cybersecurity future
          </p>
          
          {/* Animated divider */}
          <motion.div 
            className="flex justify-center space-x-2 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`h-1 rounded-full ${i % 3 === 0 ? 'bg-[#10B981] w-8' : i % 2 === 0 ? 'bg-[#3B82F6] w-4' : 'bg-gray-900 w-2'}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* 3D Card Effect */}
              <motion.div
                className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
              >
                {/* Image with parallax effect */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-[#10B981] font-medium">{member.role}</p>
                    </div>
                    
                    {/* Social links */}
                    <div className="flex gap-3 mt-4">
                      <motion.a 
                        href={member.social.linkedin}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#10B981] transition-colors"
                      >
                        <FiLinkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a 
                        href={member.social.twitter}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#3B82F6] transition-colors"
                      >
                        <FiTwitter className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Profile content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {member.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100"
                      >
                        <div className="text-2xl font-bold text-[#10B981]">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 text-3xl text-[#3B82F6]/30 group-hover:text-[#3B82F6]/50 transition-colors"
                  animate={{ 
                    rotate: 360,
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <FiShield />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}