'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FiSend, 
  FiAlertTriangle, 
  FiShield, 
  FiLock, 
  FiCode, 
  FiGlobe, 
  FiSettings, 
  FiAward,
  FiBook,
  FiBarChart2,
  FiZap,
  FiSun,
  FiMoon,
  FiTerminal,
  FiWifi,
  FiServer,
  FiUser,
  FiKey,
  FiShieldOff,
  FiActivity,
  FiHome,
  FiMap,
  FiDatabase
} from 'react-icons/fi';
import { 
  BsShieldLock, 
  BsBug, 
  BsLightningCharge,
  BsGlobe2,
  BsTranslate
} from 'react-icons/bs';
import { RiRobot2Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const Xempi = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'xempi', type?: 'threat' | 'info' | 'warning' | 'terminal'}>>([]);
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'threats' | 'training' | 'tools'>('chat');
  const [securityLevel, setSecurityLevel] = useState(72);
  const [latestThreats, setLatestThreats] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [passwordToTest, setPasswordToTest] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [language, setLanguage] = useState('English');
  const [activeRegion, setActiveRegion] = useState('All Africa');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Africa-themed icons
  const AfricaIcons = {
    threat: <FiAlertTriangle className="text-red-600" />,
    secure: <FiShield className="text-green-600" />,
    network: <FiWifi className="text-blue-600" />,
    server: <FiServer className="text-purple-600" />,
    user: <FiUser className="text-amber-600" />,
    password: <FiKey className="text-yellow-600" />,
    malware: <FiShieldOff className="text-red-500" />,
    activity: <FiActivity className="text-teal-500" />,
    language: <BsTranslate className="text-indigo-600" />,
    home: <FiHome className="text-[#e67e22]" />,
    region: <FiMap className="text-[#3498db]" />,
    data: <FiDatabase className="text-[#9b59b6]" />
  };

  // African regions
  const africanRegions = [
    'All Africa',
    'West Africa',
    'East Africa',
    'Southern Africa',
    'North Africa'
  ];

  // Region-specific threats
  const regionThreats: Record<string, string[]> = {
    'West Africa': [
      "Nigeria: Business Email Compromise Surge",
      "Ghana: Mobile Money Fraud Increase",
      "Fake Lottery Scams Targeting Expats"
    ],
    'East Africa': [
      "Kenya: SIM Swap Attacks on Bank Accounts",
      "Tanzania: Fake COVID Relief Scams",
      "Ethiopia: Phishing Posing as Government"
    ],
    'Southern Africa': [
      "South Africa: Ransomware Hits Municipalities",
      "Zimbabwe: Fake Forex Trading Platforms",
      "Mozambique: Oil/Gas Sector Phishing"
    ],
    'North Africa': [
      "Egypt: Banking Trojan 'AridViper' Active",
      "Morocco: Fake Job Offers for Europe Work",
      "Algeria: Critical Infrastructure Attacks"
    ]
  };

  // Initialize
  useEffect(() => {
    setMessages([{
      text: `${AfricaIcons.secure} **Xempi CyberShield Online**\n\n[SYSTEM] Monitoring ${activeRegion} threat landscape\n[MODULE] Ready for secure collaboration`,
      sender: 'xempi',
      type: 'terminal'
    }]);
    updateThreatFeed();
  }, [activeRegion]);

  // Auto-scroll and typing indicator
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (isTyping) {
      const timer = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [messages, isTyping]);

  // Update threat feed based on region
  const updateThreatFeed = () => {
    const regionSpecific = regionThreats[activeRegion] || [];
    const generalThreats = [
      "Pan-African: Fake WHO Health Alerts",
      "Continental: Rise in SMS Phishing",
      "Africa-wide: Critical Microsoft Exchange Vulnerabilities"
    ];
    const allThreats = [...regionSpecific, ...generalThreats];
    const randomThreats = allThreats.sort(() => 0.5 - Math.random()).slice(0, 3);
    setLatestThreats(randomThreats);
  };

  // Password strength calculator
  const checkPasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 12) strength += 40;
    if (/[A-Z]/.test(pwd)) strength += 20;
    if (/[0-9]/.test(pwd)) strength += 20;
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 20;
    setPasswordStrength(strength);
  };

  // Handle user messages with region context
  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      let response = "";
      let responseType: 'info' | 'threat' | 'warning' | 'terminal' = 'info';
      
      if (input.match(/phish|scam|fraud/i)) {
        response = `${AfricaIcons.threat} **${activeRegion} Phishing Alert**\n\nCommon patterns:\n- Fake ${activeRegion.includes('East') ? 'M-Pesa' : 'bank'} notifications\n- "Urgent account verification" scams\n- CEO fraud targeting businesses`;
        responseType = 'warning';
      } 
      else if (input.match(/ransomware|malware/i)) {
        response = `${AfricaIcons.malware} **Ransomware in ${activeRegion}**\n\nTop variants:\n1. LockBit (Businesses)\n2. Dharma (Financial sector)\n3. WannaCry (Healthcare)`;
        responseType = 'threat';
      }
      else if (input.match(/password|login/i)) {
        response = `${AfricaIcons.password} **Password Security**\n\n"123456" and "password" are most hacked in ${activeRegion}. Use:\n- Long passphrases\n- Password managers like Bitwarden`;
        responseType = 'info';
      }
      else {
        response = `${AfricaIcons.secure} **Xempi Help**\n\nTry:\n- "Latest ${activeRegion} threats"\n- "How to report cybercrime"\n- "Secure mobile money tips"`;
      }

      setMessages(prev => [...prev, { 
        text: response, 
        sender: 'xempi', 
        type: responseType 
      }]);
      
      setSecurityLevel(prev => Math.min(100, prev + 5));
      if (Math.random() > 0.6) updateThreatFeed();
    }, 1200);
  };

  // Run simulated network scan
  const runNetworkScan = () => {
    setIsTyping(true);
    setMessages(prev => [...prev, 
      { text: `${AfricaIcons.network} **Scanning ${activeRegion} Networks...**`, sender: 'xempi', type: 'terminal' }
    ]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, 
        { 
          text: `${AfricaIcons.threat} **Scan Results**\n\n- 2 Unsecured ${activeRegion.includes('East') ? 'Kenyan' : 'African'} IPs\n- 1 Brute force attempt detected\n- 3 Outdated services with CVEs`, 
          sender: 'xempi', 
          type: 'terminal' 
        }
      ]);
    }, 2000);
  };

  // Navigate home
  const goHome = () => {
    router.push('/');
  };

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-[#121212] text-gray-100' : 'bg-[#f9f8f0] text-[#333]'}`}>
      {/* Header with African pattern and home button */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-4 flex items-center justify-between bg-[#024414] text-white relative overflow-hidden`}
      >
        {/* African pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDBCMUUiIC8+CiAgPHBhdGggZD0iTTAgMEg1VjVIMFYwWiIgZmlsbD0iI0ZGRiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIi8+Cjwvc3ZnPg==')]"></div>
        
        <div className="flex items-center space-x-3 z-10">
          <motion.button
            onClick={goHome}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1 rounded-full hover:bg-[#013310]"
          >
            {AfricaIcons.home}
          </motion.button>
          <RiRobot2Line className="text-2xl" />
          <motion.h1 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Xempi CyberShield
          </motion.h1>
          <motion.span 
            className="text-xs bg-[#e67e22] px-2 py-1 rounded-full flex items-center"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
          >
            <BsLightningCharge className="mr-1" />
            {activeRegion.toUpperCase()}
          </motion.span>
        </div>
        <div className="flex items-center space-x-4 z-10">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#013310] text-white rounded px-2 py-1 text-sm"
          >
            {['English', 'Swahili', 'French', 'Arabic'].map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <select 
            value={activeRegion}
            onChange={(e) => setActiveRegion(e.target.value)}
            className="bg-[#013310] text-white rounded px-2 py-1 text-sm"
          >
            {africanRegions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-[#013310]"
          >
            {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with African motifs */}
        <motion.div 
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`w-64 border-r ${theme === 'dark' ? 'bg-[#1e1e1e] border-[#333]' : 'bg-[#f5f5e6] border-[#ddd]'} p-4 hidden md:block`}
        >
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center text-[#e67e22]">
              <BsShieldLock className="mr-2" />
              Quick Actions
            </h3>
            <div className="space-y-2">
              <motion.button 
                whileHover={{ x: 5 }}
                onClick={runNetworkScan}
                className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-[#333]' : 'hover:bg-[#eee]'}`}
              >
                <FiWifi className="text-blue-600" />
                <span>Scan {activeRegion} Networks</span>
              </motion.button>
              <motion.button 
                whileHover={{ x: 5 }}
                onClick={() => {
                  setMessages(prev => [...prev, { 
                    text: `${AfricaIcons.threat} **${activeRegion} Threat Report**\n${latestThreats.join("\n")}`, 
                    sender: 'xempi',
                    type: 'warning'
                  }]);
                }}
                className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-[#333]' : 'hover:bg-[#eee]'}`}
              >
                <FiActivity className="text-red-600" />
                <span>View {activeRegion} Threats</span>
              </motion.button>
            </div>
          </div>

          {/* Security Meter */}
          <motion.div 
            className="mb-6 p-4 rounded-lg border"
            style={{
              background: theme === 'dark' ? '#252525' : '#ffffff',
              borderColor: theme === 'dark' ? '#444' : '#ddd'
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <FiBarChart2 className="mr-2 text-[#e67e22]" />
              Security Dashboard
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Threat Detection</span>
                  <span>{securityLevel}%</span>
                </div>
                <motion.div 
                  className="h-2 bg-gray-300 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${securityLevel}%` }}
                  transition={{ duration: 1 }}
                >
                  <div 
                    className={`h-full ${securityLevel > 70 ? 'bg-green-600' : securityLevel > 40 ? 'bg-yellow-600' : 'bg-red-600'}`}
                  />
                </motion.div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Incident Response</span>
                  <span>{Math.min(100, securityLevel + 15)}%</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600" 
                    style={{ width: `${Math.min(100, securityLevel + 15)}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* African CERT Contacts */}
          <div className="p-4 rounded-lg border"
            style={{
              background: theme === 'dark' ? '#252525' : '#ffffff',
              borderColor: theme === 'dark' ? '#444' : '#ddd'
            }}
          >
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <BsGlobe2 className="mr-2 text-[#e67e22]" />
              {activeRegion} CERTs
            </h3>
            <ul className="text-sm space-y-2">
              {activeRegion === 'West Africa' && (
                <>
                  <li className="flex items-center">🇳🇬 ngCERT (Nigeria)</li>
                  <li className="flex items-center">🇬🇭 Ghana-CSIRT</li>
                </>
              )}
              {activeRegion === 'East Africa' && (
                <>
                  <li className="flex items-center">🇰🇪 KE-CIRT (Kenya)</li>
                  <li className="flex items-center">🇹🇿 TzCERT</li>
                </>
              )}
              {activeRegion === 'Southern Africa' && (
                <li className="flex items-center">🇿🇦 ZA-CSIRT (South Africa)</li>
              )}
              {activeRegion === 'North Africa' && (
                <li className="flex items-center">🇪🇬 Eg-CERT</li>
              )}
              <li className="pt-2">
                <button className="text-xs bg-[#e67e22] text-white px-2 py-1 rounded">
                  Emergency Contact
                </button>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className={`flex border-b ${theme === 'dark' ? 'border-[#333]' : 'border-[#ddd]'}`}>
            {(['chat', 'threats', 'training', 'tools'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium relative ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {tab === 'chat' ? (
                  <span className="flex items-center">
                    <BsShieldLock className="mr-2" /> Chat
                  </span>
                ) : tab === 'threats' ? (
                  <span className="flex items-center">
                    <FiAlertTriangle className="mr-2" /> Threats
                  </span>
                ) : tab === 'training' ? (
                  <span className="flex items-center">
                    <FiBook className="mr-2" /> Training
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FiCode className="mr-2" /> Tools
                  </span>
                )}
                {activeTab === tab && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#e67e22]`}
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`flex-1 overflow-y-auto p-4 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-[#f9f8f0]'}`}>
            <AnimatePresence>
              {activeTab === 'chat' && (
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={`max-w-xs md:max-w-md rounded-lg px-4 py-3 ${msg.sender === 'user' 
                          ? theme === 'dark' ? 'bg-[#e67e22] text-white' : 'bg-[#024414] text-white'
                          : msg.type === 'warning' 
                            ? 'bg-red-100 border border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200'
                            : msg.type === 'terminal'
                              ? 'bg-[#222] text-green-400 font-mono text-sm border border-[#333]'
                              : theme === 'dark' 
                                ? 'bg-[#252525] text-gray-100 border border-[#333]' 
                                : 'bg-white text-gray-800 border border-[#ddd]'}`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-[#252525]' : 'bg-white'}`}>
                        <div className="flex space-x-1">
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-[#e67e22]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                          />
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-[#e67e22]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                          />
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-[#e67e22]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </AnimatePresence>

            {/* Threat Intelligence Tab */}
            {activeTab === 'threats' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FiAlertTriangle className="text-red-600 mr-2" />
                  {activeRegion} Cyber Threats
                </h3>
                {latestThreats.map((threat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#252525] border-[#444]' : 'bg-white border-[#ddd]'}`}
                  >
                    <div className="flex items-center space-x-3">
                      {AfricaIcons.threat}
                      <div>
                        <h4 className="font-semibold">{threat}</h4>
                        <p className="text-sm mt-1">
                          {threat.includes("Nigeria") ? "West Africa threat" : 
                           threat.includes("Kenya") ? "East Africa alert" : 
                           "Regional security advisory"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="text-xs bg-[#e67e22] text-white px-2 py-1 rounded">
                        View Details
                      </button>
                      <button className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                        Mitigation
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Training Tab */}
            {activeTab === 'training' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FiBook className="text-[#e67e22] mr-2" />
                  {activeRegion} Security Training
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    `Mobile Money Security (${activeRegion.includes('East') ? 'M-Pesa' : 'Mobile Banking'})`,
                    `${activeRegion} Phishing Awareness`,
                    "SIM Swap Prevention",
                    "GDPR Compliance for Africa"
                  ].map((topic, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#252525] border-[#444]' : 'bg-white border-[#ddd]'}`}
                    >
                      <h4 className="font-medium">{topic}</h4>
                      <button className="mt-2 text-sm text-[#e67e22] hover:underline flex items-center">
                        Start Training <span className="ml-1">→</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tools Tab */}
            {activeTab === 'tools' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FiCode className="text-[#e67e22] mr-2" />
                  Security Tools
                </h3>
                
                {/* Password Strength Checker */}
                <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#252525] border-[#444]' : 'bg-white border-[#ddd]'}`}>
                  <h4 className="font-medium mb-3 flex items-center">
                    {AfricaIcons.password} Password Analyzer
                  </h4>
                  <input
                    type="text"
                    value={passwordToTest}
                    onChange={(e) => {
                      setPasswordToTest(e.target.value);
                      checkPasswordStrength(e.target.value);
                    }}
                    placeholder="Test a password's strength..."
                    className={`w-full p-2 rounded border mb-3 ${theme === 'dark' ? 'bg-[#333] border-[#444]' : 'border-[#ddd]'}`}
                  />
                  {passwordToTest && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span>Strength:</span>
                        <span>
                          {passwordStrength > 70 ? "Strong" : 
                           passwordStrength > 40 ? "Moderate" : "Weak"}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${
                            passwordStrength > 70 ? 'bg-green-600' : 
                            passwordStrength > 40 ? 'bg-yellow-600' : 'bg-red-600'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${passwordStrength}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <p className="text-xs mt-2">
                        Estimated crack time: {passwordStrength > 70 ? "Centuries" : 
                                             passwordStrength > 40 ? "Years" : "Seconds"}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Other Tools */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#252525] border-[#444]' : 'bg-white border-[#ddd]'}`}
                  >
                    <h4 className="font-medium flex items-center">
                      <FiGlobe className="text-blue-600 mr-2" />
                      Website Scanner
                    </h4>
                    <p className="text-sm mt-1 mb-3">Check for vulnerabilities in web apps</p>
                    <button className="text-xs bg-[#e67e22] text-white px-2 py-1 rounded">
                      Scan Now
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#252525] border-[#444]' : 'bg-white border-[#ddd]'}`}
                  >
                    <h4 className="font-medium flex items-center">
                      <FiDatabase className="text-purple-600 mr-2" />
                      Data Breach Check
                    </h4>
                    <p className="text-sm mt-1 mb-3">See if your email appears in breaches</p>
                    <button className="text-xs bg-[#e67e22] text-white px-2 py-1 rounded">
                      Check Email
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          {activeTab === 'chat' && (
            <motion.div 
              className={`border-t p-4 ${theme === 'dark' ? 'border-[#333] bg-[#1a1a1a]' : 'border-[#ddd] bg-[#f5f5e6]'}`}
              layout
            >
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={`Ask about ${activeRegion} cybersecurity...`}
                  className={`flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 ${theme === 'dark' 
                    ? 'bg-[#252525] border-[#444] focus:ring-[#e67e22]' 
                    : 'border-[#ddd] focus:ring-[#024414]'}`}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full bg-[#e67e22] text-white`}
                >
                  <FiSend />
                </motion.button>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Xempi v2.5 - {activeRegion} Cybersecurity
                </span>
                <span className="flex items-center text-[#e67e22]">
                  <FiLock className="mr-1" size={12} /> End-to-End Encrypted
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Xempi;