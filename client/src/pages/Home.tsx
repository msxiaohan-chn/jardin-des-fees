/*
 * JARDIN DES FÉES — Home Page
 * Style: Minimalisme Parisien Contemporain
 * Assemblage de toutes les sections
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Produits from "@/components/Produits";
import Deuil from "@/components/Deuil";
import Histoire from "@/components/Histoire";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      <Navbar />
      <Hero />
      <Services />
      <Produits />
      <Deuil />
      <Histoire />
      <Contact />
      <Footer />
    </div>
  );
}
