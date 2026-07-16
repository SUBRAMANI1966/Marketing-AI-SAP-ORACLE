import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle, Globe, Sparkles } from "lucide-react";
import { ContactFormInput } from "../types";
import { motion, AnimatePresence } from "motion/react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    services: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMapHub, setActiveMapHub] = useState<"chennai" | "bangalore" | "global">("chennai");

  const availableServices = [
    "Artificial Intelligence",
    "SAP Consulting",
    "Oracle ERP Solutions",
    "Cloud Solutions",
    "Digital Transformation",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);
      const updatedServices = alreadySelected
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  const hubDetails = {
    chennai: {
      city: "Chennai Hub",
      role: "AI & Full Stack Development R&D",
      address: "Nexora Global Tech Park, OMR, Chennai, TN, India",
      support: "Supports Asian, European, & Americas Delivery"
    },
    bangalore: {
      city: "Bangalore Hub",
      role: "SAP & Oracle Enterprise Practice",
      address: "Prestige Tech Center, Outer Ring Rd, Bangalore, KA, India",
      support: "Supports Global Migrations & ERP Integrations"
    },
    global: {
      city: "Global Delivery Office",
      role: "Business Transformation Advisory",
      address: "Co-located Hub, Serving North America & Europe Offices",
      support: "Seamless around-the-clock advisory, consulting & SLAs"
    }
  };

  const activeHub = hubDetails[activeMapHub];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-800/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight">
            Connect With Nexora Global
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Whether you are looking for AI solutions, SAP consulting, Oracle implementation, enterprise automation, or digital transformation services, our team is ready to help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info & Interactive Delivery Map (Col span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Details */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800/75 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-base text-slate-950 dark:text-white">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Phone numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-400 uppercase font-semibold">
                      TELEPHONE HOTLINES
                    </span>
                    <a href="tel:+919384661462" className="block font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors mt-0.5">
                      +91 9384661462
                    </a>
                    <a href="tel:+919677097662" className="block font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors">
                      +91 9677097662
                    </a>
                  </div>
                </div>

                {/* Corporate email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-400 uppercase font-semibold">
                      INQUIRIES & ADVISORY
                    </span>
                    <a href="mailto:info@nexoraglobal.com" className="block font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors mt-0.5">
                      info@nexoraglobal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Delivery Model Visual Map */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800/75 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-base text-slate-950 dark:text-white">
                  Global Delivery Network
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  <Globe size={10} />
                  3 active centers
                </span>
              </div>

              {/* Graphical Dot Map Container */}
              <div className="relative aspect-[1.8/1] w-full bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-slate-850">
                {/* Simulated Grid Dot Map Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dot-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                  </svg>
                </div>

                <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                  WORLDWIDE COORDINATION
                </span>

                {/* Chennai Dot button */}
                <button
                  id="hub-btn-chennai"
                  onClick={() => setActiveMapHub("chennai")}
                  className={`absolute z-10 bottom-[35%] left-[55%] flex flex-col items-center group cursor-pointer`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-md ${
                    activeMapHub === "chennai" ? "bg-indigo-500 scale-125 ring-4 ring-indigo-500/20" : "bg-white group-hover:bg-indigo-300"
                  }`} />
                  <span className="text-[9px] font-mono text-white mt-1 bg-slate-950 px-1 py-0.5 rounded leading-none shadow-md">
                    Chennai
                  </span>
                </button>

                {/* Bangalore Dot button */}
                <button
                  id="hub-btn-bangalore"
                  onClick={() => setActiveMapHub("bangalore")}
                  className={`absolute z-10 bottom-[30%] left-[45%] flex flex-col items-center group cursor-pointer`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-md ${
                    activeMapHub === "bangalore" ? "bg-indigo-500 scale-125 ring-4 ring-indigo-500/20" : "bg-white group-hover:bg-indigo-300"
                  }`} />
                  <span className="text-[9px] font-mono text-white mt-1 bg-slate-950 px-1 py-0.5 rounded leading-none shadow-md">
                    Bangalore
                  </span>
                </button>

                {/* Global Dot button */}
                <button
                  id="hub-btn-global"
                  onClick={() => setActiveMapHub("global")}
                  className={`absolute z-10 top-[25%] left-[25%] flex flex-col items-center group cursor-pointer`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-md ${
                    activeMapHub === "global" ? "bg-indigo-500 scale-125 ring-4 ring-indigo-500/20" : "bg-white group-hover:bg-indigo-300"
                  }`} />
                  <span className="text-[9px] font-mono text-white mt-1 bg-slate-950 px-1 py-0.5 rounded leading-none shadow-md">
                    Americas / EMEA
                  </span>
                </button>
              </div>

              {/* Map Hub Info Details */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                <div className="flex items-center gap-1.5 font-display font-bold text-xs text-slate-900 dark:text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span>{activeHub.city}</span>
                </div>
                <div className="font-sans text-[11px] text-slate-500 mt-1 leading-normal">
                  <span className="block font-medium text-slate-700 dark:text-slate-300">{activeHub.role}</span>
                  <span className="block italic mt-0.5">{activeHub.address}</span>
                  <span className="block text-indigo-600 dark:text-indigo-400 font-semibold mt-1.5">{activeHub.support}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Premium Interactive Request Proposal Form (Col span 7) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800/75 p-6 sm:p-10 shadow-lg">
            
            {isSubmitted ? (
              /* Success contact submission feedback state */
              <div id="contact-success-panel" className="text-center py-14 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-slate-950 dark:text-white tracking-tight">
                  Consultation Request Received!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your briefing request has been forwarded directly to our Lead Solution Architects. We will review your company's profile (<strong>{formData.company || "N/A"}</strong>) and get back to you within 24 business hours to schedule a diagnostic technical consultation.
                </p>
                <div className="mt-8">
                  <button
                    id="contact-reset-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        message: "",
                        services: [],
                      });
                    }}
                    className="px-6 py-2.5 rounded-full font-sans text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Standard consultation request form */
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-950 dark:text-white tracking-tight">
                    Request a Solution Proposal
                  </h3>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the form below and one of our expert consultants will contact you to discuss your business requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Business Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Service checklist pills */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Services of Interest *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          id={`service-pill-${service.replace(/\s+/g, '-').toLowerCase()}`}
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3.5 py-2 rounded-full font-sans text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                              : "bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-850"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    How can we help you? *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide a high-level briefing on your SAP landscape, Oracle migration timelines, or AI automation goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                  />
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans text-xs sm:text-sm font-semibold bg-slate-950 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send size={15} />
                    Send Consultation Request
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
