/*
 * JARDIN DES FÉES — Services Section
 * Style: Texte uniquement, sans images — mise en page épurée
 */

import { useEffect, useRef } from "react";

const services = [
  {
    number: "I",
    title: "Bouquets Personnalisés",
    description:
      "Des créations uniques sur mesure, adaptées à vos goûts et à chaque occasion spéciale. Chaque bouquet est une œuvre d'art florale pensée pour vous.",
    tag: "Sur mesure",
  },
  {
    number: "II",
    title: "Mariage",
    description:
      "Une touche romantique pour votre jour spécial, avec des compositions florales de rêve. Bouquets de mariée, boutonnières, arches et décoration de salle.",
    tag: "Romantique",
  },
  {
    number: "III",
    title: "Événement Entreprise",
    description:
      "Service professionnel pour sublimer vos événements et renforcer votre image de marque. Décoration de conférences, réceptions et espaces de travail.",
    tag: "Professionnel",
  },
  {
    number: "IV",
    title: "Deuil",
    description:
      "Accompagner vos adieux avec douceur : coussins ronds, cœurs, gerbes et couronnes réalisés avec le plus grand soin. Un hommage floral empreint de respect.",
    tag: "Avec soin",
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="py-24 lg:py-36" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 reveal">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#6b7c5c" }}
          >
            Ce que nous offrons
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl font-semibold"
            style={{ color: "#2c2c2c" }}
          >
            Nos Services
          </h2>
          <span className="section-divider mt-6" />
        </div>

        {/* Services Grid — Text Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="reveal flex flex-col justify-start p-8 lg:p-10 border transition-all duration-300 hover:border-[#c4847a] hover:shadow-md"
              style={{ borderColor: "#e8e0d8", transitionDelay: `${index * 80}ms` }}
            >
              {/* Tag */}
              <div
                className="inline-block font-body text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6"
                style={{ backgroundColor: "#c4847a", color: "#faf8f5", width: "fit-content" }}
              >
                {service.tag}
              </div>

              {/* Number */}
              <span
                className="font-display text-6xl lg:text-7xl font-light italic mb-4 block"
                style={{ color: "rgba(196,132,122,0.15)" }}
              >
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="font-display text-2xl lg:text-3xl font-semibold mb-4 leading-tight"
                style={{ color: "#2c2c2c" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="font-body text-base font-light leading-relaxed mb-6 flex-grow"
                style={{ color: "#5a5a5a" }}
              >
                {service.description}
              </p>

              {/* CTA */}
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-body text-sm tracking-widest uppercase self-start px-6 py-2.5 border transition-all duration-300 hover:bg-[#c4847a] hover:border-[#c4847a] hover:text-white"
                style={{ borderColor: "#c4847a", color: "#c4847a" }}
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
