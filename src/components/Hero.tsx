import React, { useState } from "react";
import { ArrowRight, Sparkles, Brain, Database, Layers, Cloud } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const [activeSystemNode, setActiveSystemNode] = useState<"ai" | "sap" | "oracle" | "cloud">("ai");

  const systemDetails = {
    ai: {
      title: "Generative AI & Agentic Intelligence",
      description: "Our custom cognitive engines sit on top of your existing workflows, orchestrating transactions, summarizing structured records, and providing conversational analytics.",
      stats: "Up to 80% process acceleration",
      color: "from-indigo-600 to-violet-500",
      accent: "text-indigo-600 dark:text-indigo-400",
      bgLight: "bg-indigo-50/50"
    },
    sap: {
      title: "SAP S/4HANA & SuccessFactors",
      description: "Seamless migration, customization, and deployment of modern SAP architectures. We optimize SuccessFactors for global HCM and Ariba for efficient vendor management.",
      stats: "Certified S/4HANA architects",
      color: "from-blue-600 to-cyan-500",
      accent: "text-blue-600 dark:text-blue-400",
      bgLight: "bg-blue-50/50"
    },
    oracle: {
      title: "Oracle Fusion ERP & OCI",
      description: "Maximize your database performance and enterprise asset visibility by deploying secure, high-availability Oracle HCM, SCM, and Cloud ERP modules on OCI.",
      stats: "Zero-downtime ledger migration",
      color: "from-amber-600 to-orange-500",
      accent: "text-amber-600 dark:text-amber-400",
      bgLight: "bg-amber-50/50"
    },
    cloud: {
      title: "Intelligent Cloud & Integration",
      description: "Unify isolated data silos with modern ETL schemas, real-time API gateways, and customized React analytical portals, creating one single source of truth.",
      stats: "99.99% operational uptime",
      color: "from-sky-600 to-teal-500",
      accent: "text-sky-600 dark:text-sky-400",
      bgLight: "bg-sky-50/50"
    }
  };

  const currentDetail = systemDetails[activeSystemNode];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950/40"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radiant Glow Accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-400/20 dark:bg-sky-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <motion.div
              id="hero-tag"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-6"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Innovate. Transform. Grow.</span>
            </motion.div>

            {/* Main Headlines */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Transforming Businesses with{" "}
              <span className="text-gradient bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500">
                AI, SAP & Oracle
              </span>
            </motion.h1>

            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-display text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300"
            >
              Empowering Enterprises Through Intelligent Technology
            </motion.p>

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-sans text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
            >
              Nexora Global is a technology consulting and digital transformation company specializing in Artificial Intelligence, SAP, Oracle, Cloud Solutions, Automation, and Enterprise Business Applications. We help organizations modernize operations, improve productivity, and accelerate growth through innovative, scalable, and future-ready solutions.
            </motion.p>

            <motion.p
              id="hero-paragraph-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 font-sans text-sm text-slate-500 dark:text-slate-400 max-w-2xl border-l-2 border-indigo-500 pl-4 py-1 italic"
            >
              Whether you are implementing enterprise software, adopting AI-powered automation, or optimizing business processes, Nexora Global delivers solutions that create measurable business value.
            </motion.p>

            {/* CTAs */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <button
                id="hero-primary-btn"
                onClick={() => onScrollTo("contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-200 dark:hover:shadow-none transition-all duration-300 scale-100 hover:scale-[1.02] cursor-pointer"
              >
                Get in Touch
                <ArrowRight size={16} />
              </button>
              <button
                id="hero-secondary-btn"
                onClick={() => onScrollTo("services")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 cursor-pointer"
              >
                Our Services
              </button>
            </motion.div>
          </div>

          {/* Right: Interactive Architectural Visual */}
          <motion.div
            id="hero-interactive-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl overflow-hidden p-6 relative">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  Enterprise Integration Ecosystem
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                  Interactive System
                </span>
              </div>

              {/* Ecosystem Grid visualization */}
              <div className="relative w-full aspect-square max-w-[340px] mx-auto bg-slate-50 dark:bg-slate-950/80 rounded-2xl border border-slate-100 dark:border-slate-900 flex items-center justify-center p-4">
                
                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer connections to core */}
                  <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                  <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                  <line x1="50%" y1="50%" x2="80%" y2="65%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                  
                  {/* Orbit circle */}
                  <circle cx="50%" cy="50%" r="35%" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                </svg>

                {/* Central Nexus Core: Nexora AI Hub */}
                <button
                  id="system-node-ai"
                  onClick={() => setActiveSystemNode("ai")}
                  className={`absolute z-10 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all ${
                    activeSystemNode === "ai"
                      ? "bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white scale-110 ring-4 ring-indigo-100 dark:ring-indigo-950/40"
                      : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-600 hover:scale-105 border border-slate-200 dark:border-slate-800"
                  }`}
                  aria-label="AI System Node"
                >
                  <Brain size={28} className={activeSystemNode === "ai" ? "animate-pulse" : ""} />
                  <span className="text-[10px] font-bold mt-1 tracking-tight">AI Agent</span>
                </button>

                {/* SAP Node (Top) */}
                <button
                  id="system-node-sap"
                  onClick={() => setActiveSystemNode("sap")}
                  className={`absolute top-4 left-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-md transition-all ${
                    activeSystemNode === "sap"
                      ? "bg-gradient-to-tr from-blue-600 to-blue-500 text-white scale-115 ring-4 ring-blue-100 dark:ring-blue-950/40"
                      : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:scale-105 border border-slate-200 dark:border-slate-800"
                  }`}
                  aria-label="SAP System Node"
                >
                  <Layers size={22} />
                  <span className="text-[9px] font-bold mt-1">SAP ERP</span>
                </button>

                {/* Oracle Node (Bottom Right) */}
                <button
                  id="system-node-oracle"
                  onClick={() => setActiveSystemNode("oracle")}
                  className={`absolute bottom-6 right-6 z-10 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-md transition-all ${
                    activeSystemNode === "oracle"
                      ? "bg-gradient-to-tr from-amber-600 to-amber-500 text-white scale-115 ring-4 ring-amber-100 dark:ring-amber-950/40"
                      : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-amber-600 hover:scale-105 border border-slate-200 dark:border-slate-800"
                  }`}
                  aria-label="Oracle System Node"
                >
                  <Database size={22} />
                  <span className="text-[9px] font-bold mt-1">Oracle</span>
                </button>

                {/* Cloud & Data Node (Bottom Left) */}
                <button
                  id="system-node-cloud"
                  onClick={() => setActiveSystemNode("cloud")}
                  className={`absolute bottom-6 left-6 z-10 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-md transition-all ${
                    activeSystemNode === "cloud"
                      ? "bg-gradient-to-tr from-sky-600 to-sky-500 text-white scale-115 ring-4 ring-sky-100 dark:ring-sky-950/40"
                      : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-sky-600 hover:scale-105 border border-slate-200 dark:border-slate-800"
                  }`}
                  aria-label="Cloud System Node"
                >
                  <Cloud size={22} />
                  <span className="text-[9px] font-bold mt-1">Integrations</span>
                </button>
              </div>

              {/* Dynamic Detail Card matching selection */}
              <div className={`mt-6 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 ${currentDetail.bgLight} dark:bg-slate-950/40 transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm ${currentDetail.accent}`}>
                    {activeSystemNode === "ai" && <Brain size={16} />}
                    {activeSystemNode === "sap" && <Layers size={16} />}
                    {activeSystemNode === "oracle" && <Database size={16} />}
                    {activeSystemNode === "cloud" && <Cloud size={16} />}
                  </span>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {currentDetail.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {currentDetail.description}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-slate-200/30 dark:border-slate-800/30 pt-2 text-[10px] font-mono">
                  <span className="text-slate-400">BENEFIT</span>
                  <span className={`font-semibold ${currentDetail.accent}`}>{currentDetail.stats}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
