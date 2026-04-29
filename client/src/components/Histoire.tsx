/*
 * JARDIN DES FÉES — Notre Histoire Section
 * Style: Pleine largeur avec image et texte éditorial, citation mise en valeur
 * Layout: Texte à gauche + Grille d'images à droite (Fleuriste en vedette)
 */

import { useEffect, useRef } from "react";

export default function Histoire() {
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
    reveals?.forEach((el: Element) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="histoire"
      ref={sectionRef}
      className="py-24 lg:py-36"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text Column - Left Side */}
          <div className="w-full lg:w-5/12 flex flex-col justify-start">
            <div className="reveal">
              <p
                className="font-body text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "#6b7c5c" }}
              >
                Notre histoire
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold mb-8 leading-tight"
                style={{ color: "#2c2c2c" }}
              >
                Bienvenue au
                <br />
                <em className="italic font-normal" style={{ color: "#c4847a" }}>
                  Jardin des Fées
                </em>
              </h2>
            </div>

            {/* Quote */}
            <blockquote
              className="reveal border-l-2 pl-6 mb-8"
              style={{ borderColor: "#c4847a" }}
            >
              <p
                className="font-display text-xl lg:text-2xl italic font-light leading-relaxed"
                style={{ color: "#2c2c2c" }}
              >
                Un savoir-faire artisanal transmis avec amour et authenticité.
              </p>
            </blockquote>

            <div className="reveal space-y-5">
              <p
                className="font-body text-base lg:text-lg font-light leading-relaxed"
                style={{ color: "#5a5a5a" }}
              >
                Depuis 1994, Caroline vous accueille au centre de la ville de Palaiseau avec passion et dévouement. Chaque jour, elle sélectionne les plus belles fleurs pour créer des compositions qui parlent au cœur.
              </p>
              <p
                className="font-body text-base lg:text-lg font-light leading-relaxed"
                style={{ color: "#5a5a5a" }}
              >
                Son savoir-faire artisanal, transmis et perfectionné au fil des années, lui permet de transformer vos émotions en compositions uniques — qu'il s'agisse d'une déclaration d'amour, d'une célébration ou d'un dernier adieu.
              </p>
            </div>

            {/* Stats */}
            <div
              className="reveal mt-10 pt-10 border-t flex flex-wrap gap-8"
              style={{ borderColor: "#e8e0d8" }}
            >
              {[
                { value: "+30", label: "Années d'expérience" },
                { value: "100%", label: "Créations sur mesure" },
                { value: "∞", label: "Fleurs avec amour" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-3xl font-semibold italic mb-1"
                    style={{ color: "#c4847a" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-body text-sm font-light"
                    style={{ color: "#5a5a5a" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Column - Right Side (Staggered Grid) */}
          <div className="w-full lg:w-7/12 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Main Image - Florist (Top Left, spans full height on desktop) */}
              <div className="md:row-span-2">
                <div className="relative overflow-hidden bg-white shadow-lg h-full">
                  <img
                    src="/manus-storage/Fleuriste_94e88796.jpg"
                    alt="Caroline - Fleuriste artisanale"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Secondary Images - Shop Exterior & Interior (Right Side) */}
              <div className="space-y-6 lg:space-y-8">
                {/* Shop Exterior */}
                <div className="relative overflow-hidden bg-white shadow-lg">
                  <img
                    src="/manus-storage/Boutiqueexterieur_a1a5b0de.jpg"
                    alt="Façade de la boutique Jardin des Fées"
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Shop Interior */}
                <div className="relative overflow-hidden bg-white shadow-lg">
                  <img
                    src="/manus-storage/Boutiqueinterieur_33ebcb34.jpg"
                    alt="Intérieur de la boutique - Atelier floral"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
