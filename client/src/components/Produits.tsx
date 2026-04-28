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
    name: "Bouquets Personnalisés",
    description: "Créations entièrement sur mesure selon vos couleurs, fleurs préférées et budget.",
    price: "Sur devis",
    tag: "Sur mesure",
    image: "/manus-storage/WechatIMG1593_c96b91d7.jpg",
    highlight: false,
  },
  {
    name: "Centres de Table",
    description: "Compositions florales élégantes pour décorer vos tables de fête et événements.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    highlight: false,
  },
  {
    name: "Compositions Florales en Pot",
    description: "Créations florales en pot, parfaites pour décorer votre intérieur ou offrir en cadeau.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80",
    highlight: false,
  },
  {
    name: "Coussins Ronds pour Deuil",
    description: "Composition florale en forme de coussin rond, symbole de douceur et de paix.",
    price: "Sur devis",
    tag: null,
    image: "/manus-storage/15981777221046_.pic_hd_99c2879b.webp",
    highlight: false,
  },
  {
    name: "Coussins Allongés pour Deuil",
    description: "Coussin allongé élégant, idéal pour accompagner les cercueils avec dignité.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80",
    highlight: false,
  },
  {
    name: "Pyramides pour Deuil",
    description: "Composition pyramidale imposante, hommage floral d'une grande prestance.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
    highlight: false,
  },
  {
    name: "Couronnes pour Deuil",
    description: "Couronnes mortuaires réalisées avec soin, pour un dernier hommage.",
    price: "Sur devis",
    tag: null,
    image: "/manus-storage/WechatIMG1603_cb54cb17.jpg",
    highlight: false,
  },
  {
    name: "Cœurs pour Deuil",
    description: "Les cœurs floraux, symboles d'amour éternel pour accompagner vos proches.",
    price: "Sur devis",
    tag: null,
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80",
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
    <section id="produits" ref={sectionRef} className="py-24 lg:py-36" style={{ backgroundColor: "#faf8f5" }}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                {produit.tag && (
                  <div
                    className="inline-block font-body text-xs tracking-[0.15em] uppercase px-2.5 py-1 mb-3"
                    style={{ backgroundColor: "#c4847a", color: "#faf8f5" }}
                  >
                    {produit.tag}
                  </div>
                )}

                <h3
                  className="font-display text-lg lg:text-xl font-semibold mb-2 leading-tight"
                  style={{ color: "#2c2c2c" }}
                >
                  {produit.name}
                </h3>

                <p
                  className="font-body text-sm font-light leading-relaxed mb-4 line-clamp-2"
                  style={{ color: "#5a5a5a" }}
                >
                  {produit.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="font-body text-base font-semibold"
                    style={{ color: "#c4847a" }}
                  >
                    {produit.price}
                  </span>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-xs tracking-widest uppercase px-3 py-1.5 border transition-all duration-300 hover:bg-[#c4847a] hover:border-[#c4847a] hover:text-white"
                    style={{ borderColor: "#c4847a", color: "#c4847a" }}
                  >
                    Devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
