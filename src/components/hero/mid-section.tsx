'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function MidSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const overlayY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section
      ref={ref}
      className="relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-center justify-center bg-gray-900"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/one.jpg"
          alt="Cybersecurity background"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
      </motion.div>

      {/* Gradient overlay with parallax */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
        style={{ y: overlayY }}
      />

      {/* Animated floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-30 z-0 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 60}px`,
            height: `${30 + Math.random() * 60}px`,
            backgroundColor:
              i % 3 === 0
                ? '#10B981'
                : i % 2 === 0
                ? '#3B82F6'
                : '#F59E0B',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-3xl"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md mb-6">
          Shaping Africa’s <span className="text-[#10B981]">Digital Security</span> Future
        </h2>
        <p className="text-lg md:text-xl text-gray-200 drop-shadow-sm mb-8">
          At <strong>SeptaGreen</strong>, we build secure and resilient digital infrastructures for
          governments, enterprises, and startups across the continent — empowering a safer digital tomorrow.
        </p>
      </motion.div>
    </section>
  );
}
