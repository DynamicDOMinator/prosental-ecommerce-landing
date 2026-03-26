"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "الفوائد", href: "#benefits" },
    { name: "المميزات", href: "#features" },
    { name: "لوحة التحكم", href: "#dashboard" },
    { name: "الأسعار", href: "#pricing" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md  py-4 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center flex-row-reverse justify-between">
          <div className="shrink-0">
            <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="flex items-center gap-2">
            
              <span className="text-xl font-bold text-white tracking-wide">
                Prosental
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-row-reverse items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
       
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl overflow-hidden transition-all duration-300 origin-top ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-primary-400 hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2 px-4 pb-2">
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-full font-bold text-base transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
