/*
 * JARDIN DES FÉES — Hero Section
 * Style: Typographie monumentale sur image pleine largeur, overlay doux
 */

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        setTimeout(() => {
          if (el) {
            el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        }, 300 + i * 200);
      }
    });
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-end pb-20 lg:pb-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663601447535/PmHDyYTBYPQxyzb3eB8JMt/hero-bouquet-Hzy3hzL8wbj7nqWmzZQkAz.webp)`,
        }}
      />
      {/* Gradient overlay — light image so dark text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(44,44,44,0.65) 0%, rgba(44,44,44,0.2) 50%, rgba(250,248,245,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-6 font-light"
            style={{ color: "rgba(250,248,245,0.8)" }}
          >
            Boutique depuis 1994 · Palaiseau
          </p>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-display text-5xl lg:text-7xl xl:text-8xl font-semibold leading-tight mb-6"
            style={{ color: "#faf8f5" }}
          >
            <em className="font-normal italic" style={{ color: "#ebe1e0" }}>
              Au Jardin des Fées
            </em>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-body text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(250,248,245,0.85)" }}
          >
            Artisan fleuriste avec plus de 40 ans d'expériences, Caroline transforme vos émotions en compositions florales uniques, au cœur de Palaiseau.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#produits");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body text-sm tracking-widest uppercase px-8 py-3.5 transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#c4847a", color: "#faf8f5" }}
            >
              Découvrir nos fleurs
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body text-sm tracking-widest uppercase px-8 py-3.5 border transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: "rgba(250,248,245,0.6)", color: "#faf8f5" }}
            >
              Nos services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 z-10">
        <span
          className="font-body text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(250,248,245,0.6)", writingMode: "vertical-rl" }}
        >
          Défiler
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ backgroundColor: "rgba(250,248,245,0.4)" }}
        />
      </div>
    </section>
  );
}
