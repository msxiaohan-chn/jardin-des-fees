/*
 * JARDIN DES FÉES — Service Deuil Section
 * Style: Sobre, respectueux — fond sombre, typographie douce
 */

import { useEffect, useRef } from "react";

const compositions = [
  {
    name: "Coussins Ronds",
    description: "Composition florale en forme de coussin rond, symbole de douceur et de paix.",
    icon: "◯",
  },
  {
    name: "Coussins Allongés",
    description: "Coussin allongé élégant, idéal pour accompagner les cercueils avec dignité.",
    icon: "▭",
  },
  {
    name: "Pyramides",
    description: "Composition pyramidale imposante, hommage floral d'une grande prestance.",
    icon: "△",
  },
  {
    name: "Cœurs",
    description: "Le cœur floral, symbole d'amour éternel pour accompagner vos proches.",
    icon: "♡",
  },
  {
    name: "Gerbes",
    description: "Gerbes traditionnelles ou modernes, personnalisées selon vos souhaits.",
    icon: "❧",
  },
  {
    name: "Couronnes",
    description: "Couronnes mortuaires réalisées avec soin, pour un dernier hommage.",
    icon: "⊙",
  },
];

const options = [
  { label: "Personnalisation", desc: "Couleurs, fleurs et messages selon vos vœux" },
  { label: "Livraison", desc: "Directement au funérarium ou au lieu de cérémonie" },
];

export default function Deuil() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="deuil"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#2c2c2c" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663601447535/PmHDyYTBYPQxyzb3eB8JMt/deuil-flowers-YjBAr7AyYwfxDNwYUktWqm.webp)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(196,132,122,0.8)" }}
          >
            Avec respect et tendresse
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mb-6"
            style={{ color: "#faf8f5" }}
          >
            Service Deuil
          </h2>
          <p
            className="font-body text-base lg:text-lg font-light leading-relaxed max-w-2xl"
            style={{ color: "rgba(250,248,245,0.75)" }}
          >
            Accompagner vos adieux avec douceur. Chaque composition est réalisée avec le plus grand soin, pour rendre un dernier hommage digne et sincère à ceux que vous aimez.
          </p>
          <span
            className="block mt-6 w-16 h-px"
            style={{ backgroundColor: "rgba(196,132,122,0.5)" }}
          />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Compositions Grid */}
          <div className="flex-1">
            <h3
              className="font-display text-xl font-semibold mb-8 italic"
              style={{ color: "rgba(250,248,245,0.6)" }}
            >
              Nos compositions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compositions.map((item, index) => (
                <div
                  key={item.name}
                  className="reveal p-5 border transition-all duration-300 hover:border-[#c4847a] group"
                  style={{
                    borderColor: "rgba(250,248,245,0.1)",
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  <span
                    className="block text-2xl mb-3 transition-colors group-hover:text-[#c4847a]"
                    style={{ color: "rgba(250,248,245,0.3)" }}
                  >
                    {item.icon}
                  </span>
                  <h4
                    className="font-display text-base font-semibold mb-2"
                    style={{ color: "#faf8f5" }}
                  >
                    {item.name}
                  </h4>
                  <p
                    className="font-body text-sm font-light leading-relaxed"
                    style={{ color: "rgba(250,248,245,0.55)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Options */}
          <div className="lg:w-80 xl:w-96 flex flex-col gap-8">
            {/* Options */}
            <div className="reveal space-y-4">
              {options.map((opt) => (
                <div
                  key={opt.label}
                  className="flex items-start gap-4 p-4 border"
                  style={{ borderColor: "rgba(196,132,122,0.3)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#c4847a" }}
                  />
                  <div>
                    <p
                      className="font-display text-sm font-semibold mb-1"
                      style={{ color: "#faf8f5" }}
                    >
                      {opt.label}
                    </p>
                    <p
                      className="font-body text-xs font-light"
                      style={{ color: "rgba(250,248,245,0.55)" }}
                    >
                      {opt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="reveal">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full font-body text-sm tracking-widest uppercase py-3.5 transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#c4847a", color: "#faf8f5" }}
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
