/*
 * JARDIN DES FÉES — Produits Section
 * Style: Grille de cartes élégantes avec prix et hover effects
 */

import { useEffect, useRef } from "react";

const produits = [
  {
    name: "Bouquets de Saison",
    description: "Compositions fraîches selon les arrivages du moment, reflétant la beauté de chaque saison.",
    price: "À partir de 26 €",
    tag: "Populaire",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    highlight: true,
  },
  {
    name: "Roses Romantiques",
    description: "Roses sélectionnées pour leur beauté et leur parfum, idéales pour exprimer vos sentiments.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80",
    highlight: false,
  },
  {
    name: "Lys Purs",
    description: "La noblesse du lys blanc, symbole de pureté et d'élégance, pour toutes les occasions.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
    highlight: false,
  },
  {
    name: "Bouquets Personnalisés",
    description: "Créations entièrement sur mesure selon vos couleurs, fleurs préférées et budget.",
    price: "Sur devis",
    tag: "Sur mesure",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80",
    highlight: false,
  },
  {
    name: "Plantes Intérieures",
    description: "Une sélection de plantes d'intérieur pour décorer et purifier votre espace de vie.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80",
    highlight: false,
  },
  {
    name: "Plantes de Jardin",
    description: "Arbustes, vivaces et annuelles pour embellir vos espaces extérieurs toute l'année.",
    price: "Sur devis",
    tag: null,
    image: "/manus-storage/WechatIMG1588_b2c0909b.jpg",
    highlight: false,
  },
];

export default function Produits() {
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
      id="produits"
      ref={sectionRef}
      className="py-24 lg:py-36"
      style={{ backgroundColor: "#f3ede8" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#6b7c5c" }}
          >
            Notre sélection
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold"
              style={{ color: "#2c2c2c" }}
            >
              Nos Produits
            </h2>
            <p
              className="font-body text-sm font-light max-w-sm"
              style={{ color: "#5a5a5a" }}
            >
              Livraison disponible à partir de{" "}
              <strong className="font-medium" style={{ color: "#c4847a" }}>
                35 €
              </strong>
            </p>
          </div>
          <span className="section-divider mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {produits.map((produit, index) => (
            <div
              key={produit.name}
              className={`reveal group relative overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg ${
                produit.highlight ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={produit.image}
                  alt={produit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tag */}
                {produit.tag && (
                  <div
                    className="absolute top-3 left-3 font-body text-xs tracking-[0.15em] uppercase px-3 py-1"
                    style={{ backgroundColor: "#c4847a", color: "#faf8f5" }}
                  >
                    {produit.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-display text-xl font-semibold mb-2"
                  style={{ color: "#2c2c2c" }}
                >
                  {produit.name}
                </h3>
                <p
                  className="font-body text-sm font-light leading-relaxed mb-4"
                  style={{ color: "#5a5a5a" }}
                >
                  {produit.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-lg font-semibold italic"
                    style={{ color: "#c4847a" }}
                  >
                    {produit.price}
                  </span>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 hover:bg-[#c4847a] hover:border-[#c4847a] hover:text-white"
                    style={{ borderColor: "#c4847a", color: "#c4847a" }}
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Banner */}
        <div
          className="mt-12 p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-4 reveal"
          style={{ backgroundColor: "#6b7c5c" }}
        >
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
              <rect x="9" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            <div>
              <p className="font-display text-lg font-semibold" style={{ color: "#faf8f5" }}>
                Livraison disponible
              </p>
              <p className="font-body text-sm font-light" style={{ color: "rgba(250,248,245,0.8)" }}>
                À partir de 35 € — Palaiseau et alentours
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-body text-sm tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 hover:bg-white hover:text-[#6b7c5c] whitespace-nowrap"
            style={{ borderColor: "rgba(250,248,245,0.6)", color: "#faf8f5" }}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
