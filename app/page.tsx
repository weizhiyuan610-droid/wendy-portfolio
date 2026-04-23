'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('wendyzw1231@163.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1D1D1F] font-sans selection:bg-[#1a4d8c]/20 scroll-smooth">
      {/* Aurora Gradient Background - Deep Emerald to Electric Blue */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#1a4d8c]/20 to-[#3B82F6]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#3B82F6]/15 to-[#1a4d8c]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Background - 5% opacity */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]" style={{
        backgroundImage: `
          linear-gradient(to right, #1D1D1F 1px, transparent 1px),
          linear-gradient(to bottom, #1D1D1F 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Navigation - Clean Apple Style */}
      <nav className="px-6 md:px-10 py-4 md:py-5 border-b border-gray-200/50 flex justify-between items-center max-w-7xl mx-auto sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-xl">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-semibold tracking-tight leading-none">Wendy ZW.</span>
          <p className="text-[9px] md:text-[10px] font-medium text-gray-500 tracking-[0.15em] uppercase mt-1">Global Strategic Growth</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-gray-600">
          <a href="#expertise" className="hover:text-[#1a4d8c] transition-colors">Expertise</a>
          <a href="#methodology" className="hover:text-[#1a4d8c] transition-colors">Methodology</a>
          <a href="#research" className="hover:text-[#1a4d8c] transition-colors">Research</a>
          <a href="#contact" className="bg-gradient-to-r from-[#10B981] to-[#1a4d8c] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#1a4d8c]/20 transition-all">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" /></svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-12">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-3xl text-gray-400 hover:text-gray-600">×</button>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-900">Expertise</a>
            <a href="#methodology" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-900">Methodology</a>
            <a href="#research" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-900">Research</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium bg-gradient-to-r from-[#10B981] to-[#1a4d8c] text-white px-10 py-4 rounded-full">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Tightened Spacing */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-14 md:pb-16 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block text-xs font-medium text-[#10B981] tracking-[0.2em] uppercase mb-4">Strategic Growth Consultant</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 text-gray-900">
          Market Intelligence<br/>
          <span className="bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent">& Strategic Growth</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
          Bridging the gap between doctoral research rigor and market execution.<br/>
          Turning complex market data into human-centric conversations and high-impact business opportunities.
        </p>

        <div className="flex items-center justify-center">
          <a href="#contact" className="bg-gradient-to-r from-[#10B981] to-[#1a4d8c] text-white px-10 py-4 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#1a4d8c]/20 transition-all">
            Start Conversation
          </a>
        </div>
      </section>

      {/* High-Impact Metrics Bar - With Colorful Borders */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-14 md:pb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Metric 1 - Emerald Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border-t-2 border-[#10B981] border-x border-b border-gray-200/50 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all text-center">
            <p className="text-5xl md:text-6xl font-semibold text-[#10B981] leading-none mb-3">88%</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Success Rate</p>
          </div>

          {/* Metric 2 - Blue Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border-t-2 border-[#1a4d8c] border-x border-b border-gray-200/50 hover:shadow-lg hover:shadow-[#1a4d8c]/10 transition-all text-center">
            <p className="text-5xl md:text-6xl font-semibold text-[#1a4d8c] leading-none mb-3">$55K+</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Monthly Revenue</p>
          </div>

          {/* Metric 3 - Electric Blue Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border-t-2 border-[#3B82F6] border-x border-b border-gray-200/50 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all text-center">
            <p className="text-5xl md:text-6xl font-semibold text-[#3B82F6] leading-none mb-3">200+</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Global Prospects</p>
          </div>

          {/* Metric 4 - Gradient Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border-t-2 border-gradient-to-r from-[#10B981] to-[#1a4d8c] border-x border-b border-gray-200/50 hover:shadow-lg hover:shadow-[#1a4d8c]/10 transition-all text-center">
            <p className="text-5xl md:text-6xl font-semibold text-gray-900 leading-none mb-3">&lt;1%</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Complaint Rate</p>
          </div>
        </div>
      </section>

      {/* Growth Strategy - With Colorful Borders */}
      <section id="expertise" className="max-w-6xl mx-auto px-6 md:px-8 pb-14 md:pb-16 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-[#1a4d8c] tracking-[0.2em] uppercase">Strategic Architecture</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">How I Build the Pipeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Outbound prospecting, qualification, and pipeline conversion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Acquisition - Emerald Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border-t-2 border-[#10B981]/70 border-x border-b border-white/20 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Strategic Outbound Prospecting</h3>
            <p className="text-gray-600 leading-relaxed mb-6">Account-Based Prospecting: I identify high-value stakeholders and navigate complex organizations using a tech-forward stack (Salesforce, LinkedIn, HubSpot).</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Prospects Engaged</span>
                <span className="font-semibold text-[#10B981]">500+</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Engagement</span>
                <span className="font-semibold text-[#10B981]">High-Intent</span>
              </div>
            </div>
          </div>

          {/* Qualification - Blue Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border-t-2 border-[#1a4d8c]/70 border-x border-b border-white/20 hover:shadow-lg hover:shadow-[#1a4d8c]/10 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a4d8c]/20 to-[#1a4d8c]/5 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#1a4d8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Qualification</h3>
            <p className="text-gray-600 leading-relaxed mb-6">Smart Qualification: Ensuring every lead is a strategic fit for the product, with a focus on compliance and long-term scalability.</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Qualified Meetings Set</span>
                <span className="font-semibold text-[#1a4d8c]">200+</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Fit Score</span>
                <span className="font-semibold text-[#1a4d8c]">98%</span>
              </div>
            </div>
          </div>

          {/* Conversion - Electric Blue Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border-t-2 border-[#3B82F6]/70 border-x border-b border-white/20 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Conversion</h3>
            <p className="text-gray-600 leading-relaxed mb-6">High-Conversion Outreach: Transforming qualified prospects into long-term partners through clear value demonstration and persistent follow-up.</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Full-Funnel Rate</span>
                <span className="font-semibold text-[#3B82F6]">88%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Satisfaction</span>
                <span className="font-semibold text-[#3B82F6]">99%</span>
              </div>
            </div>
          </div>

          {/* Market Intelligence - Gradient Border */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border-t-2 border-gradient-to-r from-[#10B981]/70 to-[#1a4d8c]/70 border-x border-b border-white/20 hover:shadow-lg hover:shadow-[#1a4d8c]/10 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-[#1a4d8c]/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#1a4d8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Market Intelligence</h3>
            <p className="text-gray-600 leading-relaxed mb-6">2026 trend forecasting and competitive analysis, using doctoral research methodologies to identify emerging market opportunities.</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">ESG Inquiry Growth</span>
                <span className="font-semibold bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent font-bold">+340%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">ROI Priority</span>
                <span className="font-semibold text-[#1a4d8c]">76%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Core Engine Section - The Memory Anchor */}
      <section id="methodology" className="max-w-6xl mx-auto px-6 md:px-8 pb-10 md:pb-12 relative z-10">
        {/* Decorative Ink Stroke */}
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M0,50 Q50,30 100,50 T200,50" stroke="#1D1D1F" strokeWidth="0.5" fill="none"/>
            <path d="M0,80 Q60,60 120,80 T200,80" stroke="#1D1D1F" strokeWidth="0.5" fill="none"/>
            <path d="M0,110 Q40,90 80,110 T200,110" stroke="#1D1D1F" strokeWidth="0.5" fill="none"/>
            <path d="M0,140 Q70,120 140,140 T200,140" stroke="#1D1D1F" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>

        <div className="text-center mb-12">
          <span className="text-xs font-medium bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent tracking-[0.2em] uppercase">The Memory Anchor</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">
            The Dual-Core Engine:<br/>
            <span className="bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent">Narrative Authority x Analytical Rigor</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Where the art of storytelling meets the precision of engineering</p>
        </div>

        {/* Prominent Quote Block */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-gray-200/30 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] via-[#1a4d8c] to-[#3B82F6]"></div>
            <svg className="w-12 h-12 text-gray-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl text-gray-900 leading-relaxed italic mb-8">
              "Most SDRs spray and pray. I research, personalize, and start conversations that actually matter."
            </blockquote>
            <cite className="text-sm font-medium text-gray-500 not-italic">— Wendy ZW, Doctoral Researcher & Cold Email Specialist</cite>
          </div>
        </div>

        {/* Split-Card Design */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Novelist Side - Vintage Typewriter */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-50/90 to-orange-50/70 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-amber-200/30 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-amber-900">The Novelist</h3>
                  <p className="text-xs text-amber-700 uppercase tracking-wider">Narrative Authority</p>
                </div>
              </div>

              {/* Stylized Typewriter Visual */}
              <div className="mb-8 flex justify-center">
                <svg className="w-48 h-32" viewBox="0 0 200 120">
                  {/* Typewriter Body */}
                  <rect x="20" y="40" width="160" height="60" rx="4" fill="#78350f" opacity="0.2"/>
                  <rect x="30" y="30" width="140" height="10" rx="2" fill="#92400e" opacity="0.3"/>
                  {/* Keys */}
                  <circle cx="50" cy="70" r="6" fill="#78350f" opacity="0.4"/>
                  <circle cx="75" cy="70" r="6" fill="#78350f" opacity="0.4"/>
                  <circle cx="100" cy="70" r="6" fill="#78350f" opacity="0.4"/>
                  <circle cx="125" cy="70" r="6" fill="#78350f" opacity="0.4"/>
                  <circle cx="150" cy="70" r="6" fill="#78350f" opacity="0.4"/>
                  {/* Paper */}
                  <rect x="60" y="20" width="80" height="100" fill="white" opacity="0.8" rx="1"/>
                  <line x1="70" y1="35" x2="130" y2="35" stroke="#78350f" strokeWidth="1" opacity="0.3"/>
                  <line x1="70" y1="50" x2="120" y2="50" stroke="#78350f" strokeWidth="1" opacity="0.3"/>
                  <line x1="70" y1="65" x2="125" y2="65" stroke="#78350f" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✦</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Personalization at Scale: I write outbound sequences that actually get read. By ditching corporate jargon for authentic storytelling, I transform cold outreach into meaningful meetings.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✦</span>
                  <p className="text-sm text-gray-700 leading-relaxed">I turn complex value propositions into personalized narratives that consistently convert cold leads into booked meetings.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✦</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Writing cold emails that don't feel like cold emails—building genuine curiosity through relevance, insight, and human connection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Researcher Side - High-Tech Data Viz */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a4d8c]/5 to-[#3B82F6]/5 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-[#1a4d8c]/20 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a4d8c] to-[#3B82F6] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-[#1a4d8c]">The Researcher</h3>
                  <p className="text-xs text-[#3B82F6] uppercase tracking-wider">Analytical Rigor</p>
                </div>
              </div>

              {/* High-Tech Data Visualization */}
              <div className="mb-8 flex justify-center">
                <svg className="w-48 h-32" viewBox="0 0 200 120">
                  {/* Grid */}
                  <line x1="20" y1="20" x2="20" y2="100" stroke="#1a4d8c" strokeWidth="1" opacity="0.2"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#1a4d8c" strokeWidth="1" opacity="0.2"/>
                  <line x1="20" y1="60" x2="180" y2="60" stroke="#1a4d8c" strokeWidth="0.5" opacity="0.1"/>
                  <line x1="20" y1="40" x2="180" y2="40" stroke="#1a4d8c" strokeWidth="0.5" opacity="0.1"/>
                  <line x1="20" y1="80" x2="180" y2="80" stroke="#1a4d8c" strokeWidth="0.5" opacity="0.1"/>

                  {/* Data Line with Gradient */}
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#1a4d8c" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <polyline points="20,90 50,75 80,82 110,55 140,68 170,35" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Data Points */}
                  <circle cx="20" cy="90" r="4" fill="#10B981"/>
                  <circle cx="50" cy="75" r="4" fill="#10B981"/>
                  <circle cx="80" cy="82" r="4" fill="#1a4d8c"/>
                  <circle cx="110" cy="55" r="4" fill="#1a4d8c"/>
                  <circle cx="140" cy="68" r="4" fill="#3B82F6"/>
                  <circle cx="170" cy="35" r="4" fill="#3B82F6"/>

                  {/* Area under curve */}
                  <polygon points="20,90 50,75 80,82 110,55 140,68 170,35 170,100 20,100" fill="url(#lineGrad)" opacity="0.1"/>
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#1a4d8c] text-xl">✦</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Deep-Dive Prospecting: I use research methodologies to build dynamic ICPs. Instead of guessing, I rely on data to map markets and prioritize accounts where the product solves real pain points.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#1a4d8c] text-xl">✦</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Evidence-based prospecting: Every outbound effort backed by statistical probability and strategic alignment with global compliance solutions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#1a4d8c] text-xl">✦</span>
                  <p className="text-sm text-gray-700 leading-relaxed">Data-driven account prioritization—using research frameworks to identify high-potential accounts and decision-maker personas before making first contact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Rigor - Dynamic Network Graph */}
      <section id="research" className="bg-white border-t border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Dynamic Network Graph with Gradient */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#10B981]/5 via-[#1a4d8c]/5 to-[#3B82F6]/5 rounded-3xl p-8 flex items-center justify-center">
                {/* Dynamic Network Graph SVG */}
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#1a4d8c" />
                    </linearGradient>
                    <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a4d8c" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>

                  {/* Central Hub - Engineering Optimization */}
                  <circle cx="200" cy="200" r="50" fill="url(#nodeGrad1)" opacity="0.8"/>
                  <circle cx="200" cy="200" r="35" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
                  <text x="200" y="205" textAnchor="middle" fontSize="9" fill="white" fontWeight="600" fontFamily="sans-serif">ENGINEERING</text>

                  {/* Primary Nodes */}
                  <circle cx="200" cy="90" r="25" fill="url(#nodeGrad1)" opacity="0.7"/>
                  <text x="200" y="94" textAnchor="middle" fontSize="7" fill="white" fontWeight="500">DATA</text>

                  <circle cx="330" cy="200" r="25" fill="url(#nodeGrad2)" opacity="0.7"/>
                  <text x="330" y="204" textAnchor="middle" fontSize="7" fill="white" fontWeight="500">ROI</text>

                  <circle cx="200" cy="310" r="25" fill="url(#nodeGrad2)" opacity="0.7"/>
                  <text x="200" y="314" textAnchor="middle" fontSize="7" fill="white" fontWeight="500">SCALE</text>

                  <circle cx="70" cy="200" r="25" fill="url(#nodeGrad1)" opacity="0.7"/>
                  <text x="70" y="204" textAnchor="middle" fontSize="7" fill="white" fontWeight="500">OPTIMIZE</text>

                  {/* Secondary Nodes */}
                  <circle cx="120" cy="120" r="15" fill="#10B981" opacity="0.5"/>
                  <circle cx="280" cy="120" r="15" fill="#1a4d8c" opacity="0.5"/>
                  <circle cx="280" cy="280" r="15" fill="#3B82F6" opacity="0.5"/>
                  <circle cx="120" cy="280" r="15" fill="#10B981" opacity="0.5"/>

                  {/* Connection Lines */}
                  <line x1="200" y1="90" x2="200" y2="150" stroke="url(#nodeGrad1)" strokeWidth="2" opacity="0.4"/>
                  <line x1="330" y1="200" x2="250" y2="200" stroke="url(#nodeGrad2)" strokeWidth="2" opacity="0.4"/>
                  <line x1="200" y1="310" x2="200" y2="250" stroke="url(#nodeGrad2)" strokeWidth="2" opacity="0.4"/>
                  <line x1="70" y1="200" x2="150" y2="200" stroke="url(#nodeGrad1)" strokeWidth="2" opacity="0.4"/>

                  {/* Diagonal Connections */}
                  <line x1="120" y1="120" x2="170" y2="170" stroke="#10B981" strokeWidth="1.5" opacity="0.3"/>
                  <line x1="280" y1="120" x2="230" y2="170" stroke="#1a4d8c" strokeWidth="1.5" opacity="0.3"/>
                  <line x1="280" y1="280" x2="230" y2="230" stroke="#3B82F6" strokeWidth="1.5" opacity="0.3"/>
                  <line x1="120" y1="280" x2="170" y2="230" stroke="#10B981" strokeWidth="1.5" opacity="0.3"/>

                  {/* Outer ring indicators */}
                  <circle cx="200" cy="50" r="6" fill="#10B981" opacity="0.3"/>
                  <circle cx="350" cy="200" r="6" fill="#3B82F6" opacity="0.3"/>
                  <circle cx="200" cy="350" r="6" fill="#3B82F6" opacity="0.3"/>
                  <circle cx="50" cy="200" r="6" fill="#10B981" opacity="0.3"/>

                  {/* Figure Label */}
                  <text x="380" y="390" textAnchor="end" fontSize="8" fill="#1a4d8c" opacity="0.5" fontFamily="serif" fontStyle="italic">Figure 1.2: Engineering Optimization → Marketing ROI Network</text>
                </svg>
              </div>
            </div>

            {/* Right: Research Rigor Content */}
            <div>
              <span className="text-xs font-medium bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent tracking-[0.2em] uppercase">Doctoral Research</span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-8">
                From Research Rigor<br/>
                <span className="bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent">To Market Results</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#1a4d8c] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Sustainable Growth Ecosystems</h4>
                    <p className="text-gray-600">Doctoral research focus on engineering scalable, data-driven acquisition systems that balance growth with sustainability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1a4d8c] to-[#3B82F6] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Engineering Optimization → Marketing ROI</h4>
                    <p className="text-gray-600">Applying systematic engineering principles to growth challenges—measurement, optimization, and continuous improvement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#1a4d8c] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Evidence-Based Strategy</h4>
                    <p className="text-gray-600">Every growth initiative is grounded in quantitative analysis and validated through real-world performance metrics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1a4d8c] to-[#3B82F6] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Verified Outcomes</h4>
                    <p className="text-gray-600">Successfully managed high-stakes portfolios in the premium education sector, including Imperial College, University of Toronto, G5 & Ivy League placements—proven success at the highest level.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Tightened Spacing */}
      <section id="contact" className="max-w-4xl mx-auto px-6 md:px-8 py-14 md:py-16 text-center relative z-10">
        <span className="text-xs font-medium bg-gradient-to-r from-[#10B981] to-[#1a4d8c] bg-clip-text text-transparent tracking-[0.2em] uppercase">Get in Touch</span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">Ready to Scale Your Growth?</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">Let's discuss how a research-led, narrative-driven approach can scale your outbound efforts.</p>

        {/* Centered Email with Copy Functionality */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={copyEmail}
            className="group relative inline-flex items-center gap-4 text-2xl md:text-3xl font-semibold text-gray-900 hover:text-[#1a4d8c] transition-all"
            aria-label="Copy email address to clipboard"
          >
            <span>wendyzw1231@163.com</span>
            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>

          {/* Copy Feedback - Subtle & Hover-Only */}
          <div className="h-5 text-sm font-medium transition-all">
            <span className={`${emailCopied ? 'text-[#1a4d8c] opacity-100' : 'opacity-0'} transition-opacity`}>
              ✓ Copied to clipboard
            </span>
          </div>

          {/* Hover-Only Tooltip */}
          <div className="relative group/tooltip">
            <p className="text-xs text-gray-400 group-hover/tooltip:text-gray-500 transition-colors">
              Click to copy
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Updated Title */}
      <footer className="border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-gray-500 tracking-wide">© 2026 Wendy ZW. All rights reserved.</p>
          <p className="text-xs font-medium text-gray-500 tracking-wide">Doctoral Researcher · Engineering Design</p>
        </div>
      </footer>
    </main>
  );
}
