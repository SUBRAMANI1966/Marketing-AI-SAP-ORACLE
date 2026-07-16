import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "services" },
    { label: "Why Nexora", href: "why-us" },
    { label: "Architect Hub", href: "architect-hub" },
    { label: "Careers", href: "careers" },
    { label: "Contact", href: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            id="logo-link"
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-md shadow-indigo-200 dark:shadow-none group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-slate-950 dark:text-white group-hover:text-indigo-600 transition-colors">
                NEXORA
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-indigo-600 dark:text-indigo-400 uppercase leading-none">
                GLOBAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                id={`nav-link-${link.href}`}
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-[14px] font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <button
              id="cta-nav-button"
              onClick={() => onScrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans text-sm font-semibold bg-slate-950 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-sm hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-none transition-all duration-300 scale-100 hover:scale-[1.02] cursor-pointer"
            >
              Request Consultation
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  id={`mobile-nav-link-${link.href}`}
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-cta-nav-button"
                  onClick={() => {
                    onScrollTo("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-all"
                >
                  Request Consultation
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
