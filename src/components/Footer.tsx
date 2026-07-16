import React from "react";
import { Phone, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollTo: (elementId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const footerServices = [
    "Artificial Intelligence",
    "SAP Consulting",
    "Oracle Consulting",
    "Cloud Solutions",
    "Digital Transformation",
    "Software Development",
    "Managed Services",
  ];

  return (
    <footer id="site-footer" className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-display font-bold text-lg">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  NEXORA
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] font-bold text-indigo-400 uppercase leading-none">
                  GLOBAL
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering enterprises with Artificial Intelligence, SAP, Oracle, Cloud, and Digital Transformation solutions to modernize operations and accelerate sustainable growth.
            </p>
          </div>

          {/* Col 2: Services Quick list (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo("services");
                    }}
                    className="font-sans text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
              Corporate Contact
            </h4>
            <ul className="space-y-4">
              {/* Telephone */}
              <li className="flex items-start gap-3 text-slate-400 text-xs sm:text-sm">
                <Phone size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-300">Hotlines:</span>
                  <a href="tel:+919384661462" className="block hover:text-indigo-400 mt-0.5 transition-colors">
                    +91 9384661462
                  </a>
                  <a href="tel:+919677097662" className="block hover:text-indigo-400 transition-colors">
                    +91 9677097662
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 text-slate-400 text-xs sm:text-sm">
                <Mail size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-300">Email:</span>
                  <a href="mailto:info@nexoraglobal.com" className="block hover:text-indigo-400 mt-0.5 transition-colors">
                    info@nexoraglobal.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-sans text-[11px] text-slate-500">
              © {new Date().getFullYear()} Nexora Global. All Rights Reserved. • Chennai, India
            </p>
          </div>

          {/* Back to top scroll button */}
          <button
            id="back-to-top-btn"
            onClick={() => onScrollTo("hero")}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400 hover:text-white font-sans text-[11px] font-semibold transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
