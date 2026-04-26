/*
 * JARDIN DES FÉES — Services Section
 * Style: Grille asymétrique avec images et texte, numérotation romaine
 */

import { useEffect, useRef } from "react";

const services = [
  {
    number: "I",
    title: "Bouquets Personnalisés",
    description:
      "Des créations uniques sur mesure, adaptées à vos goûts et à chaque occasion spéciale. Chaque bouquet est une œuvre d'art florale pensée pour vous.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663601447535/PmHDyYTBYPQxyzb3eB8JMt/hero-bouquet-Hzy3hzL8wbj7nqWmzZQkAz.webp",
    tag: "Sur mesure",
  },
  {
    number: "II",
    title: "Mariage",
    description:
      "Une touche romantique pour votre jour spécial, avec des compositions florales de rêve. Bouquets de mariée, boutonnières, arches et décoration de salle.",
    image:
      "/manus-storage/wedding-flowers-custom_18cb96f3.jpg",
    tag: "Romantique",
  },
  {
    number: "III",
    title: "Événement Entreprise",
    description:
      "Service professionnel pour sublimer vos événements et renforcer votre image de marque. Décoration de conférences, réceptions et espaces de travail.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663601447535/PmHDyYTBYPQxyzb3eB8JMt/corporate-event-3nL88dRv993TdnCwjF8jtz.webp",
    tag: "Professionnel",
  },
  {
    number: "IV",
    title: "Deuil",
    description:
      "Accompagner vos adieux avec douceur : coussins ronds, cœurs, gerbes et couronnes réalisés avec le plus grand soin. Un hommage floral empreint de respect.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663601447535/PmHDyYTBYPQxyzb3eB8JMt/deuil-flowers-YjBAr7AyYwfxDNwYUktWqm.webp",
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

        {/* Services Grid */}
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`reveal flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 font-body text-xs tracking-[0.2em] uppercase px-3 py-1.5"
                  style={{ backgroundColor: "#faf8f5", color: "#6b7c5c" }}
                >
                  {service.tag}
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span
                  className="font-display text-6xl lg:text-8xl font-light italic mb-4 block"
                  style={{ color: "rgba(196,132,122,0.2)" }}
                >
                  {service.number}
                </span>
                <h3
                  className="font-display text-3xl lg:text-4xl font-semibold mb-5 leading-tight"
                  style={{ color: "#2c2c2c" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-body text-base lg:text-lg font-light leading-relaxed mb-8"
                  style={{ color: "#5a5a5a" }}
                >
                  {service.description}
                </p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
