import React from "react";
import { whyNexora, coreValues } from "../data";
import { LucideIcon } from "./LucideIcon";
import { Target, Eye, Quote, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const WhyUs: React.FC = () => {
  return (
    <div id="why-us-wrapper">
      {/* 1. Why Nexora Global? Section */}
      <section id="why-us" className="py-24 bg-white dark:bg-slate-900 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Visual Pitch Container (Left) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
                Strategic Advantage
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight leading-tight">
                Why Nexora Global?
              </h2>
              <p className="font-sans text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                We combine deep technical capabilities with strategic business consulting to execute deployments that directly improve enterprise metrics.
              </p>

              {/* Bold Slogan Card */}
              <div className="mt-8 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                
                <h3 className="font-display font-extrabold text-2xl tracking-tight text-white mb-2">
                  Innovate. Transform. Grow.
                </h3>
                <p className="font-sans text-xs text-indigo-200/80 leading-relaxed mb-6">
                  Nexora Global is committed to turning technical complexity into a competitive advantage for forward-looking organizations.
                </p>
                
                <div className="flex gap-4 border-t border-slate-800 pt-5 text-indigo-300 font-mono text-xs">
                  <div>
                    <span className="block text-white text-lg font-bold">100%</span>
                    <span className="text-[10px]">Client Alignment</span>
                  </div>
                  <div className="border-l border-slate-800 pl-4">
                    <span className="block text-white text-lg font-bold">End-to-End</span>
                    <span className="text-[10px]">Delivery Governance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Us Cards List (Right) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyNexora.map((item, index) => (
                <motion.div
                  id={`why-item-${index}`}
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-5 hover:bg-white dark:hover:bg-slate-900 hover:border-indigo-500/30 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <LucideIcon name={item.iconName} size={20} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-950 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[12.5px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 2. What We Think (Philosophy, Vision, Mission) Section */}
      <section id="philosophy" className="py-24 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-800/50 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Philosophy */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
              Our Philosophy
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight">
              What We Think
            </h2>
            
            {/* Interactive Quote Block */}
            <div className="mt-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800/70 p-6 sm:p-10 shadow-md relative text-left">
              <Quote size={48} className="absolute top-6 right-6 text-slate-100 dark:text-slate-800" />
              
              <div className="relative z-10">
                <p className="font-display font-extrabold text-lg sm:text-2xl text-slate-950 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
                  “Technology should solve business problems—not create complexity.”
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  At Nexora Global, we believe that Artificial Intelligence, SAP, Oracle, and Cloud technologies are powerful enablers of business transformation. Every organization deserves solutions that are secure, scalable, and aligned with long-term business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission Split Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800/70 p-8 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Eye size={24} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-slate-950 dark:text-white tracking-tight">
                  Our Vision
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  To become a trusted global technology partner delivering intelligent digital solutions that transform industries.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800/70 p-8 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-slate-950 dark:text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  To empower businesses with innovative AI and enterprise technologies that improve efficiency, enhance customer experiences, and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Ethical Pillars
              </span>
              <h3 className="font-display font-extrabold text-2xl text-slate-950 dark:text-white mt-1">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  id={`core-value-${idx}`}
                  key={val.title}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3.5">
                    <LucideIcon name={val.iconName} size={18} />
                  </div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight">
                    {val.title}
                  </h4>
                  <p className="font-sans text-[11.5px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
