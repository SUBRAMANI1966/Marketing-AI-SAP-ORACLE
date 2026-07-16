import React, { useState } from "react";
import { coreServices, serviceDetailGroups } from "../data";
import { LucideIcon } from "./LucideIcon";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ai");

  const currentCategory = serviceDetailGroups.find((group) => group.id === activeTab) || serviceDetailGroups[0];

  return (
    <div id="services-wrapper">
      {/* 1. Core Services Grid */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
              Expertise & Offerings
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight">
              Our Core Services
            </h2>
            <p className="font-sans text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              We deliver high-impact Consulting and Implementation Services built on cutting-edge platforms, optimizing operations and engineering continuous growth.
            </p>
          </div>

          {/* Grid Layout (10 Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                id={`core-service-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-200/55 dark:border-slate-800/80 p-5 hover:bg-white dark:hover:bg-slate-900 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-100 dark:group-hover:shadow-none transition-all duration-300 mb-4">
                    <LucideIcon name={service.iconName} size={20} strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[12.5px] text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. What We Do Section */}
      <section id="what-we-do" className="py-24 bg-slate-50 dark:bg-slate-950/20 border-t border-b border-slate-200/50 dark:border-slate-800/50 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
              Modern Solutions
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight">
              What We Do
            </h2>
            <p className="font-sans text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              At Nexora Global, we partner with businesses to accelerate digital transformation using cutting-edge technologies. Explore our primary architectural pillars:
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
            {serviceDetailGroups.map((group) => {
              const isActive = activeTab === group.id;
              return (
                <button
                  id={`what-we-do-tab-${group.id}`}
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-display text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-md scale-102"
                      : "bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm"
                  }`}
                >
                  <LucideIcon name={group.iconName} size={16} />
                  <span>{group.category}</span>
                </button>
              );
            })}
          </div>

          {/* Category Detail Panel */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Pillar Pitch (Left) */}
              <div className="lg:col-span-5 bg-slate-950 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Visual Glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-500/30 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-sky-500/20 blur-3xl" />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-widest text-indigo-400 uppercase font-semibold">
                    <Sparkles size={12} />
                    Core Business Focus
                  </span>
                  <h3 className="font-display font-extrabold text-2xl mt-4 leading-tight">
                    {currentCategory.category}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                    {currentCategory.description}
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <span>NEXORA CONSULTING FRAMEWORK • ACTIVE</span>
                </div>
              </div>

              {/* Specific Subservices List (Right) */}
              <div className="lg:col-span-7 p-8 sm:p-10 bg-white dark:bg-slate-900">
                <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest mb-6">
                  Featured Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentCategory.subservices.map((sub, index) => (
                    <motion.div
                      id={`subservice-item-${currentCategory.id}-${index}`}
                      key={sub}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 hover:border-indigo-200/50 dark:hover:border-indigo-950/50 hover:bg-indigo-50/10 dark:hover:bg-indigo-950/10 transition-colors group"
                    >
                      <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform mt-0.5 shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {sub}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500">Need specific custom configurations?</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Speak with an Architect
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
