'use client';

import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiClock, FiUser, FiLock, FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TopBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Password strength indicators
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false
    });

    useEffect(() => {
        if (formData.password) {
            setPasswordStrength({
                length: formData.password.length >= 8,
                uppercase: /[A-Z]/.test(formData.password),
                lowercase: /[a-z]/.test(formData.password),
                number: /[0-9]/.test(formData.password),
                specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
            });
        }
    }, [formData.password]);

    const validateForm = () => {
        const newErrors = {};
        
        if (!isLogin && !formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!isLogin && !Object.values(passwordStrength).every(Boolean)) {
            newErrors.password = 'Password does not meet requirements';
        }

        if (!isLogin && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            
            // Reset form after success
            setTimeout(() => {
                setShowAuthModal(false);
                setSubmitSuccess(false);
                setIsSubmitting(false);
                if (!isLogin) {
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    });
                }
            }, 2000);
        } catch (error) {
            setIsSubmitting(false);
            // Handle error case
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Top Bar */}
            <div className="bg-[#024414] text-white text-sm rounded-b-lg shadow-md w-screen z-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2">
                        {/* Contact Information */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
                            <div className="flex items-center bg-[#013310]/30 px-3 py-1 rounded-full">
                                <FiClock className="mr-2 text-[#00B51D]" size={14} />
                                <span className="text-xs sm:text-sm">Mon-Fri: 9AM-5PM</span>
                            </div>
                            <div className="flex items-center bg-[#013310]/30 px-3 py-1 rounded-full">
                                <FiPhone className="mr-2 text-[#00B51D]" size={14} />
                                <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center bg-[#013310]/30 px-3 py-1 rounded-full">
                                <FiMail className="mr-2 text-[#00B51D]" size={14} />
                                <span className="text-xs sm:text-sm">contact@septagreen.com</span>
                            </div>
                        </div>

                        {/* Auth Links and Social */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-[#013310]/30 px-3 py-1 rounded-full">
                                <button
                                    onClick={() => {
                                        setShowAuthModal(true);
                                        setIsLogin(true);
                                    }}
                                    className="flex items-center hover:text-[#00B51D] transition-colors text-xs sm:text-sm"
                                >
                                    <FiUser className="mr-1" size={14} /> Login
                                </button>
                                <span className="text-gray-400">|</span>
                                <button
                                    onClick={() => {
                                        setShowAuthModal(true);
                                        setIsLogin(false);
                                    }}
                                    className="flex items-center hover:text-[#00B51D] transition-colors text-xs sm:text-sm"
                                >
                                    <FiLock className="mr-1" size={14} /> Sign Up
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <a href="#" className="text-gray-300 hover:text-[#00B51D] transition-colors p-1 rounded-full bg-[#013310]/30">
                                    <FaFacebook size={14} />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#00B51D] transition-colors p-1 rounded-full bg-[#013310]/30">
                                    <FaTwitter size={14} />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#00B51D] transition-colors p-1 rounded-full bg-[#013310]/30">
                                    <FaLinkedin size={14} />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#00B51D] transition-colors p-1 rounded-full bg-[#013310]/30">
                                    <FaInstagram size={14} />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#00B51D] transition-colors p-1 rounded-full bg-[#013310]/30">
                                    <FaTiktok size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Auth Modal */}
            <AnimatePresence>
                {showAuthModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200"
                        >
                            <div className="flex justify-between items-center bg-[#024414] p-4">
                                <h3 className="text-lg font-semibold text-white">
                                    {isLogin ? 'Login to Your Account' : 'Create New Account'}
                                </h3>
                                <button
                                    onClick={() => setShowAuthModal(false)}
                                    className="text-white hover:text-[#00B51D] transition-colors"
                                    disabled={isSubmitting}
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                {!isLogin && (
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B51D] focus:border-transparent`}
                                            disabled={isSubmitting}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs flex items-center mt-1">
                                                <FiAlertCircle className="mr-1" /> {errors.name}
                                            </p>
                                        )}
                                    </div>
                                )}

                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 text-sm border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B51D] focus:border-transparent`}
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs flex items-center mt-1">
                                            <FiAlertCircle className="mr-1" /> {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 text-sm border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B51D] focus:border-transparent`}
                                        disabled={isSubmitting}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs flex items-center mt-1">
                                            <FiAlertCircle className="mr-1" /> {errors.password}
                                        </p>
                                    )}
                                    
                                    {!isLogin && formData.password && (
                                        <div className="mt-2 space-y-1">
                                            <p className="text-xs text-gray-600">Password must contain:</p>
                                            <ul className="text-xs space-y-1">
                                                <li className={`flex items-center ${passwordStrength.length ? 'text-green-600' : 'text-gray-400'}`}>
                                                    <FiCheck className="mr-1" size={12} /> At least 8 characters
                                                </li>
                                                <li className={`flex items-center ${passwordStrength.uppercase ? 'text-green-600' : 'text-gray-400'}`}>
                                                    <FiCheck className="mr-1" size={12} /> One uppercase letter
                                                </li>
                                                <li className={`flex items-center ${passwordStrength.lowercase ? 'text-green-600' : 'text-gray-400'}`}>
                                                    <FiCheck className="mr-1" size={12} /> One lowercase letter
                                                </li>
                                                <li className={`flex items-center ${passwordStrength.number ? 'text-green-600' : 'text-gray-400'}`}>
                                                    <FiCheck className="mr-1" size={12} /> One number
                                                </li>
                                                <li className={`flex items-center ${passwordStrength.specialChar ? 'text-green-600' : 'text-gray-400'}`}>
                                                    <FiCheck className="mr-1" size={12} /> One special character
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {!isLogin && (
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 text-sm border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B51D] focus:border-transparent`}
                                            disabled={isSubmitting}
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-red-500 text-xs flex items-center mt-1">
                                                <FiAlertCircle className="mr-1" /> {errors.confirmPassword}
                                            </p>
                                        )}
                                    </div>
                                )}

                                <AnimatePresence>
                                    {submitSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                        >
                                            <div className="flex items-center">
                                                <FiCheck className="mr-2" />
                                                {isLogin ? 'Login successful!' : 'Account created successfully!'}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            type="submit"
                                            className={`w-full ${isSubmitting ? 'bg-[#024414]/80' : 'bg-[#024414]'} text-white py-2.5 px-4 rounded-lg hover:bg-[#013310] transition-colors font-medium mt-2 flex items-center justify-center`}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                isLogin ? 'Login' : 'Sign Up'
                                            )}
                                        </motion.button>
                                    )}
                                </AnimatePresence>

                                <div className="text-center pt-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsLogin(!isLogin);
                                            setErrors({});
                                        }}
                                        className="text-sm text-[#00B51D] hover:underline font-medium"
                                        disabled={isSubmitting}
                                    >
                                        {isLogin
                                            ? "Don't have an account? Sign Up"
                                            : "Already have an account? Login"}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TopBar;