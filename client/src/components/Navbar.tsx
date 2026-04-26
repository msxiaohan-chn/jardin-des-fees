/*
 * JARDIN DES FÉES — Navbar Component
 * Style: Minimalisme Parisien — navigation fine, typographie élégante
 */

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos Services", href: "#services" },
  { label: "Nos Produits", href: "#produits" },
  { label: "Service Deuil", href: "#deuil" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#accueil")}
            className="flex flex-col items-start group"
          >
            <span
              className="font-display text-xl lg:text-2xl font-semibold tracking-wide"
              style={{ color: "#2c2c2c" }}
            >
              Au Jardin des Fées
            </span>
            <span
              className="text-xs tracking-[0.2em] uppercase font-body font-light"
              style={{ color: "#6b7c5c" }}
            >
              
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-light tracking-wide transition-colors duration-200 hover:text-[#c4847a]"
                style={{ color: "#2c2c2c" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick("#contact")}
              className="font-body text-sm tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 hover:bg-[#c4847a] hover:border-[#c4847a] hover:text-white"
              style={{ borderColor: "#c4847a", color: "#c4847a" }}
            >
              Commander
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "#2c2c2c" }}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#2c2c2c" }}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "#2c2c2c" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#faf8f5" }}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 pt-2 border-t" style={{ borderColor: "#e8e0d8" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm font-light tracking-wide text-left py-1 transition-colors hover:text-[#c4847a]"
              style={{ color: "#2c2c2c" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="font-body text-sm tracking-widest uppercase px-6 py-2.5 border text-center mt-2 transition-all hover:bg-[#c4847a] hover:border-[#c4847a] hover:text-white"
            style={{ borderColor: "#c4847a", color: "#c4847a" }}
          >
            Commander
          </button>
        </div>
      </div>
    </header>
  );
}
