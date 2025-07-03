'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <Head>
                <title>SeptaGreen | African Cybersecurity Excellence</title>
                <meta name="description" content="Digital Security, African Precision" />
            </Head>

            <div className="relative min-h-screen w-full bg-white overflow-hidden">
                {/* Cinematic Background Layers with African Textile Patterns */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/home.jpg"
                        alt="Digital security landscape"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                        className="grayscale-[30%] contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/80 via-transparent to-gray-950/60" />
                    
                    {/* African Kente Cloth Overlay Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ 
                                    x: [0, Math.random() * 10 - 5],
                                    y: [0, Math.random() * 10 - 5]
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 20,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className={`absolute h-1 ${i % 4 === 0 ? 'bg-[#10B981]' : i % 3 === 0 ? 'bg-[#3B82F6]' : 'bg-yellow-500'} ${i % 2 === 0 ? 'w-16' : 'w-24'}`}
                                style={{
                                    top: `${i * 5}%`,
                                    left: `${Math.random() * 100}%`,
                                    transform: `rotate(${Math.random() * 10 - 5}deg)`
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Animated Connection Network with Tribal Patterns */}
                <svg className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                    {/* Main connection paths */}
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1 }}
                        d="M20,20 Q50,100 80,20 T140,20 T200,20 T260,20 T320,20 T380,20"
                        stroke="url(#connectionGradient)"
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="5 3"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1.5 }}
                        d="M20,80 Q100,50 180,80 T340,80"
                        stroke="url(#connectionGradient)"
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="3 5"
                    />
                    
                    <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Main Content */}
                <div className="relative z-10 h-screen flex items-center justify-center px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="w-full max-w-6xl"
                    >
                        {/* African Geometric Emblem with Animated Patterns */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, delay: 1, type: 'spring' }}
                            className="mx-auto w-40 h-40 mb-16 relative"
                        >
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                {/* Base Pattern with African motifs */}
                                <motion.path
                                    d="M20,20 L180,20 L180,180 L20,180 Z"
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                />
                                
                                {/* Animated Inner Geometrics */}
                                <motion.g
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.4 }}
                                >
                                    <path
                                        d="M50,50 L150,50 L150,150 L50,150 Z"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M70,70 L130,70 L130,130 L70,130 Z"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="1.5"
                                    />
                                    
                                    
                                </motion.g>
                                
                            </svg>
                            
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-[#10B981]/30 pointer-events-none"
                            />
                        </motion.div>

                        {/* Text content with African-inspired animations */}
                        <div className="relative z-10 h-screen flex flex-col justify-center pl-8 md:pl-16 lg:pl-24">
                            <div className="max-w-2xl space-y-6">
                                <motion.h1 
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-tight"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    Welcome to <span className="text-[#10B981]">SeptaGreen</span>
                                </motion.h1>
                                
                                <motion.h2 
                                    className="text-2xl md:text-3xl font-medium text-gray-700"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    Digital Security, <span className="text-[#3B82F6] font-semibold">African Precision.</span>
                                </motion.h2>

                                {/* Animated Cultural pattern divider */}
                                <motion.div 
                                    className="flex space-x-2 pt-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={`h-1 ${i % 3 === 0 ? 'bg-[#10B981] w-8' : i % 2 === 0 ? 'bg-[#3B82F6] w-4' : 'bg-gray-900 w-2'}`}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                                        />
                                    ))}
                                </motion.div>
                                
                                {/* African proverb animation */}
                                <motion.div
                                    className="mt-12 text-gray-500 italic"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.8 }}
                                >
                                    <motion.p
                                        animate={{ 
                                            x: [0, 5, 0],
                                            textShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 5px rgba(16,185,129,0.3)", "0 0 0px rgba(16,185,129,0)"]
                                        }}
                                        transition={{ 
                                            duration: 8, 
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        "Wisdom is like a baobab tree - no one individual can embrace it alone."
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                        
                        {/* Interactive Elements with African Patterns */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-center mt-16"
                        >
                            {/* Animated Cultural Divider with pattern */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '300px' }}
                                transition={{ duration: 1.5, delay: 1.5 }}
                                className="mx-auto h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent mb-8 relative overflow-visible"
                            >
                                <motion.div
                                    className="absolute -top-2 left-1/2 w-4 h-4 bg-[#3B82F6] rounded-full"
                                    animate={{
                                        x: [-150, 150, -150],
                                        scale: [1, 1.5, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>

                            {/* Interactive Elements with African motifs */}
                            <motion.div
                                className="flex justify-center gap-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.8 }}
                            >
                                {['Cyber', 'Intelligence', 'Innovation'].map((word, i) => (
                                    <motion.div
                                        key={word}
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group cursor-pointer"
                                    >

                                        <motion.div
                                            layoutId={`underline-${word}`}
                                            className="absolute bottom-0 left-0 h-0.5 bg-[#10B981] w-full"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ originX: 0 }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Global styles with African-inspired animations */}
                <style jsx global>{`
                    @keyframes gradient-flow {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-gradient-flow {
                        background-size: 200% 200%;
                        animation: gradient-flow 8s ease infinite;
                    }
                    
                    @keyframes kente-wave {
                        0% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-5px) rotate(2deg); }
                        100% { transform: translateY(0) rotate(0deg); }
                    }
                    .kente-animate {
                        animation: kente-wave 5s ease-in-out infinite;
                    }
                    
                    @keyframes adinkra-spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .adinkra-spin {
                        animation: adinkra-spin 20s linear infinite;
                    }
                `}</style>
            </div>
        </>
    );
}