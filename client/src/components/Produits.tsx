/*
 * JARDIN DES FÉES — Produits Section
 * Style: Grille de cartes élégantes avec prix et hover effects
 * Feature: Image carousel avec indicateurs de points dynamiques + Adaptive Height
 */

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImage {
  url: string;
  aspectRatio: string;
}

interface Product {
  name: string;
  description: string;
  price: string;
  tag: string | null;
  images: ProductImage[];
  highlight: boolean;
}

const produits: Product[] = [
  {
    name: "Bouquets de Saison",
    description: "Compositions fraîches selon les arrivages du moment, reflétant la beauté de chaque saison.",
    price: "À partir de 26 €",
    tag: "Populaire",
    images: [
      { url: "/manus-storage/BouquetsDeSaison01_d1a1211c.jpg", aspectRatio: "4/3" },
      { url: "/manus-storage/BouquetsDeSaison02_6fad9e9e.jpg", aspectRatio: "4/3" },
    ],
    highlight: true,
  },
  {
    name: "Bouquets Personnalisés",
    description: "Créations entièrement sur mesure selon vos couleurs, fleurs préférées et budget.",
    price: "Sur devis",
    tag: "Sur mesure",
    images: [{ url: "/manus-storage/WechatIMG1593_c96b91d7.jpg", aspectRatio: "4/3" }],
    highlight: false,
  },
  {
    name: "Centres de Table",
    description: "Compositions florales élégantes pour décorer vos tables de fête et événements.",
    price: "Sur devis",
    tag: null,
    images: [{ url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80", aspectRatio: "4/3" }],
    highlight: false,
  },
  {
    name: "Compositions Florales en Pot",
    description: "Créations florales en pot, parfaites pour décorer votre intérieur ou offrir en cadeau.",
    price: "Sur devis",
    tag: null,
    images: [
      { url: "/manus-storage/CompositionFloraleenPot_fa7f4093.jpg", aspectRatio: "0.63" },
    ],
    highlight: false,
  },
  {
    name: "Coussins Ronds pour Deuil",
    description: "Composition florale en forme de coussin rond, symbole de douceur et de paix.",
    price: "Sur devis",
    tag: null,
    images: [
      { url: "/manus-storage/CoussinsRond01_129de114.jpg", aspectRatio: "0.97" },
      { url: "/manus-storage/CoussinRond02_b867cb2f.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/15981777221046_.pic_hd_99c2879b.webp", aspectRatio: "4/3" },
    ],
    highlight: false,
  },
  {
    name: "Coussins Allongés pour Deuil",
    description: "Coussin allongé élégant, idéal pour accompagner les cercueils avec dignité.",
    price: "Sur devis",
    tag: null,
    images: [
      { url: "/manus-storage/CoussinAllonge01_new_0d25916b.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/CoussinAllonge02_a099cbb9.jpg", aspectRatio: "1.01" },
      { url: "/manus-storage/CoussinAllonge03_new_606f249d.jpg", aspectRatio: "0.75" },
    ],
    highlight: false,
  },
  {
    name: "Pyramides pour Deuil",
    description: "Composition pyramidale imposante, hommage floral d'une grande prestance.",
    price: "Sur devis",
    tag: null,
    images: [
      { url: "/manus-storage/Piramides01_f94557c9.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/Piramides02_4b996b00.jpg", aspectRatio: "1.02" },
      { url: "/manus-storage/piramides 03_b11ef704.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/WechatIMG1602_9890a1fc.jpg", aspectRatio: "4/3" },
    ],
    highlight: false,
  },
  {
    name: "Couronnes pour Deuil",
    description: "Couronnes mortuaires réalisées avec soin, pour un dernier hommage.",
    price: "Sur devis",
    tag: null,
    images: [
      { url: "/manus-storage/Courrones01_d587af6c.jpg", aspectRatio: "0.95" },
      { url: "/manus-storage/couronnes_outpainting_1505f558.png", aspectRatio: "5/3" },
    ],
    highlight: false,
  },
  {
    name: "Cœurs pour Deuil",
    description: "Les cœurs floraux, symboles d'amour éternel pour accompagner vos proches.",
    price: "Sur devis",
    tag: null,
    images: [{ url: "/manus-storage/WechatIMG1604_72d1e63f.jpg", aspectRatio: "4/3" }],
    highlight: false,
  },
  {
    name: "Plantes Intérieures",
    description: "Une sélection de plantes d'intérieur pour décorer et purifier votre espace de vie.",
    price: "Sur devis",
    tag: null,
    images: [
      { url: "/manus-storage/PlantesInterieur01_b6dc0e7d.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/PlantesInteireurs02_757bccab.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/PlantesInterieur03_3307ba15.jpg", aspectRatio: "0.75" },
      { url: "/manus-storage/PlantesInterieurs04_4825a8e3.jpg", aspectRatio: "0.75" },
    ],
    highlight: false,
  },
  {
    name: "Plantes de Jardin",
    description: "Arbustes, vivaces et annuelles pour embellir vos espaces extérieurs toute l'année.",
    price: "Sur devis",
    tag: null,
    images: [{ url: "/manus-storage/WechatIMG1588_b2c0909b.jpg", aspectRatio: "4/3" }],
    highlight: false,
  },
];

function ProductCard({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const images = product.images.map((img) => {
    if (typeof img === "string") {
      return { url: img, aspectRatio: "4/3" };
    }
    return img;
  });

  useEffect(() => {
    if (!isAutoPlay || images.length <= 1) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, images.length]);

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentImageIndex(index);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="group">
      {/* Image Container with Adaptive Height */}
      <div className="relative overflow-hidden bg-white shadow-lg rounded-lg mb-4">
        <div
          style={{
            aspectRatio: currentImage.aspectRatio,
            overflow: "hidden",
          }}
        >
          <img
            src={currentImage.url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators - Only show if multiple images */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              style={{ backgroundColor: index === currentImageIndex ? "#faf8f5" : "rgba(250,248,245,0.5)" }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          {product.tag && (
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full text-white"
              style={{ backgroundColor: "#c4847a" }}
            >
              {product.tag}
            </span>
          )}
        </div>
        <p className="font-body text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <p className="font-display text-base font-semibold" style={{ color: "#c4847a" }}>
          {product.price}
        </p>
      </div>
    </div>
  );
}

export default function Produits() {
  return (
    <section className="py-20 px-4 bg-white" id="produits">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nos Produits
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de créations florales, du bouquet de saison aux compositions pour les moments importants.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produits.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
