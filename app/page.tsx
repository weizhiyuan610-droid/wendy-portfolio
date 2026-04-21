'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0f172a] font-sans selection:bg-[#00D1B2]/30 scroll-smooth">

      {/* 1. Navigation: 响应式导航，电脑端保持黑色按钮 */}
      <nav className="px-6 md:px-10 py-4 md:py-5 border-b border-slate-200 flex justify-between items-center max-w-7xl mx-auto sticky top-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-xl">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black tracking-tighter italic leading-none uppercase">Wendy ZW.</span>
          <p className="text-[7px] md:text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-1">Global Strategic Admissions</p>
        </div>

        {/* 电脑端显示菜单 */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-widest uppercase text-slate-500">
          <a href="#expertise" className="hover:text-[#00D1B2] transition-colors">Expertise</a>
          <a href="#logic" className="hover:text-[#00D1B2] transition-colors">Methodology</a>
          <a href="#impact" className="hover:text-[#00D1B2] transition-colors">Impact</a>
          <a href="#contact" className="bg-[#0f172a] text-white px-7 py-2 rounded-full hover:bg-[#00D1B2] transition-all shadow-lg">
            CONTACT
          </a>
        </div>

        {/* 手机端汉堡按钮 */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" /></svg>
        </button>
      </nav>

      {/* 手机端全屏菜单 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#0f172a] flex flex-col justify-center items-center gap-12 text-white">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-3xl">✕</button>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic">Expertise</a>
            <a href="#logic" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic">Methodology</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic">Impact</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold bg-[#00D1B2] text-[#0f172a] px-10 py-4 rounded-full">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero: 解决手机端爆框问题 */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12 grid lg:grid-cols-12 gap-10 border-b border-slate-200 overflow-hidden">
        <div className="lg:col-span-8 md:border-r border-slate-200 md:pr-12">
          <h2 className="text-[#B89150] font-bold tracking-[0.4em] text-[8px] md:text-[10px] uppercase mb-6 md:mb-8">Issue 01 / Strategic Performance</h2>
          <h1 className="text-4xl sm:text-6xl md:text-[7.5rem] font-black leading-[0.95] tracking-tighter mb-8 md:mb-10">
            Synthesizing <br className="hidden sm:block"/>Academic <br className="hidden sm:block"/>Rigor with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1B2] to-[#00BBF9]">Performance.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 font-medium leading-tight max-w-xl border-l-4 border-[#00D1B2] pl-8">
            Wendy ZW engineers strategic enrollment systems, leveraging doctoral-level data intelligence to drive institutional growth within the global postgraduate market.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end gap-10">
          <div className="space-y-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Core Track Record</p>
            <div className="space-y-3 text-[#0f172a]">
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-600 uppercase">Elite Efficacy</span>
                <span className="text-3xl md:text-4xl font-black">88%</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-600 uppercase">Avg. Mo. Revenue</span>
                <span className="text-3xl md:text-4xl font-black">$55K+</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-600 uppercase">Research Logic</span>
                <span className="text-3xl md:text-4xl font-black uppercase">Doc.</span>
              </div>
            </div>

            <div className="aspect-video md:aspect-[4/5] rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm">
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent"></div>
               <p className="absolute bottom-4 left-4 right-4 text-[8px] font-bold text-white uppercase tracking-[0.2em] leading-relaxed">
                 Systemic modeling of sustainable enrollment ecosystems.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Consultative Logic: 完整文案 + 彩蛋 */}
      <section id="logic" className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 border-b border-slate-200">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 mb-8 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-4 md:mb-6">The Consultative <br className="hidden md:block"/>Logic.</h3>
            <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase tracking-[0.3em]">A proprietary framework for institutional growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-3 gap-6 md:gap-8">
            {[
              { step: "01", title: "Systemic Discovery", desc: "Executing deep-domain diagnosis to convert latent candidate interest into high-intent engagement through systematic behavioral intelligence.", gradient: "from-[#BCCEB1]/40 to-transparent" },
              { step: "02", title: "Parametric Mapping", desc: "Applying doctoral-level benchmarks to align candidate profiles with elite institutional requirements, ensuring strategic feasibility and data-driven calibration.", gradient: "from-[#00D1B2]/35 to-transparent" },
              { step: "03", title: "Narrative Synthesis", desc: "Integrating professional narrative craftsmanship into application logic for high-stakes candidates, synthesizing intellectual identities with maximum commercial value.", gradient: "from-[#F15BB5]/35 to-transparent", extra: "NOTE: SIGNED AUTHOR EXPERTISE" }
            ].map((item, i) => (
              <div key={i} className={`group border-l border-slate-200 pl-6 py-5 md:py-8 bg-gradient-to-br ${item.gradient} hover:border-[#00D1B2] transition-all`}>
                <span className="text-[10px] font-black text-slate-400 mb-8 md:mb-12 block group-hover:text-[#0f172a] transition-colors">{item.step}</span>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                {item.extra && <p className="text-[9px] font-bold text-[#B89150] uppercase tracking-widest italic">{item.extra}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Reports: 88% + 99% 满意度纹理 */}
      <section id="impact" className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] mb-12 md:mb-16 italic text-[#0f172a]">Verified Impact Analysis</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          <article className="space-y-6 md:space-y-10">
             <div className="relative aspect-video bg-slate-100 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group border border-slate-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover mix-blend-multiply opacity-60 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-[10rem] font-black text-[#0f172a]/90 tracking-tighter">88<span className="text-3xl md:text-6xl">%</span></span>
                </div>
             </div>
             <div className="max-w-md">
                <p className="text-[#00D1B2] font-black text-[10px] uppercase tracking-widest mb-4">Elite Placement Trajectory</p>
                <h3 className="text-3xl md:text-4xl font-black mb-4">University Strategy.</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed mb-6">Orchestrated placements for G5 and Ivy League institutions with an 88% verification rate.</p>
                <div className="flex gap-10 text-[10px] font-bold text-slate-300 uppercase tracking-widest"><span>Outcome: Imperial / Toronto</span></div>
             </div>
          </article>

          <article className="space-y-6 md:space-y-10 lg:mt-24">
             <div className="relative aspect-video bg-[#0f172a] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl">
                {/* 满意度纹理彩蛋 */}
                <div className="absolute inset-0 opacity-15 flex flex-wrap gap-8 p-12 justify-center items-center pointer-events-none group-hover:opacity-30 transition-opacity">
                  {[...Array(6)].map((_, i) => (
                    <svg key={i} className="w-10 h-10 md:w-16 md:h-16 text-[#00D1B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                  <span className="text-4xl md:text-8xl font-black text-[#00D1B2] tracking-tighter leading-tight">99% Satisfaction</span>
                </div>
             </div>
             <div className="max-w-md">
                <p className="text-[#F15BB5] font-black text-[10px] uppercase tracking-widest mb-4">Operational Resilience</p>
                <h3 className="text-3xl md:text-4xl font-black mb-4">Success Management.</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed mb-6">Managed 200+ global candidates concurrently during peak cycles with less than 1% friction.</p>
                <div className="flex gap-10 text-[10px] font-bold text-slate-300 uppercase tracking-widest"><span>Scale: 150+ Concurrent</span></div>
             </div>
          </article>
        </div>
      </section>

      {/* 5. Contact Section: 正确邮箱 */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28 text-center border-t border-slate-200">
          <p className="text-[#B89150] text-[11px] font-bold tracking-[0.5em] uppercase mb-10 md:mb-12">Inquiry & Collaboration</p>
          <h2 className="text-5xl md:text-[7rem] font-black tracking-tighter mb-12 md:mb-16 leading-[0.9]">Ready to Scale <br/>Your Academic Impact?</h2>
          <a href="mailto:wendyzw1231@163.com" className="text-2xl md:text-5xl font-light hover:text-[#00D1B2] transition-all underline underline-offset-[16px] decoration-slate-200">
            wendyzw1231@163.com
          </a>
      </section>

      <footer className="bg-white px-6 md:px-10 py-10 md:py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em]">
          <p>© 2026 Wendy ZW. All Rights Reserved.</p>
          <p className="hidden md:block italic">Calibrated for Strategic Performance & Global Growth</p>
        </div>
      </footer>
    </main>
  );
}
