/*
 * JARDIN DES FÉES — Contact Section
 * Style: Fond vert mousse, formulaire épuré, informations pratiques
 */

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full font-body text-sm font-light px-4 py-3 border bg-transparent outline-none transition-colors focus:border-[#c4847a]";
  const inputStyle = {
    borderColor: "rgba(250,248,245,0.2)",
    color: "#faf8f5",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-36"
      style={{ backgroundColor: "#6b7c5c" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Info */}
          <div className="w-full lg:w-5/12">
            <div className="reveal">
              <p
                className="font-body text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "rgba(250,248,245,0.6)" }}
              >
                Prenons contact
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
                style={{ color: "#faf8f5" }}
              >
                Parlons de votre
                <br />
                <em className="italic font-normal" style={{ color: "#e8c4c0" }}>
                  projet floral
                </em>
              </h2>
              <p
                className="font-body text-base font-light leading-relaxed mb-10"
                style={{ color: "rgba(250,248,245,0.75)" }}
              >
                Caroline et son équipe sont à votre écoute pour créer la composition florale qui vous ressemble. N'hésitez pas à nous contacter pour tout renseignement ou devis.
              </p>
            </div>

            {/* Contact Info */}
            <div className="reveal space-y-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Adresse",
                  value: "24 Rue de Paris, Palaiseau, 91120\nAu centre-ville de Palaiseau, 3 minutes à pied de la Gare RER Palaiseau",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "Nous appeler pour une commande ou un devis au 0160143989",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                  label: "Horaires",
                  value: "Mardi — Vendredi : 9h — 19h\nSamedi : 9h — 20h\nDimanche : 9h — 13h",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span style={{ color: "rgba(250,248,245,0.5)" }}>{item.icon}</span>
                  <div>
                    <p
                      className="font-body text-xs tracking-widest uppercase mb-1"
                      style={{ color: "rgba(250,248,245,0.5)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-body text-sm font-light whitespace-pre-line"
                      style={{ color: "#faf8f5" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="w-full lg:w-7/12 reveal">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 border"
                style={{ borderColor: "rgba(250,248,245,0.15)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(250,248,245,0.1)" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e8c4c0" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3
                  className="font-display text-2xl font-semibold mb-3"
                  style={{ color: "#faf8f5" }}
                >
                  Message envoyé !
                </h3>
                <p
                  className="font-body text-sm font-light"
                  style={{ color: "rgba(250,248,245,0.7)" }}
                >
                  Caroline vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-body text-xs tracking-widest uppercase block mb-2"
                      style={{ color: "rgba(250,248,245,0.5)" }}
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      className="font-body text-xs tracking-widest uppercase block mb-2"
                      style={{ color: "rgba(250,248,245,0.5)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-body text-xs tracking-widest uppercase block mb-2"
                      style={{ color: "rgba(250,248,245,0.5)" }}
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label
                      className="font-body text-xs tracking-widest uppercase block mb-2"
                      style={{ color: "rgba(250,248,245,0.5)" }}
                    >
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={inputClass}
                      style={{ ...inputStyle, backgroundColor: "transparent" }}
                    >
                      <option value="" style={{ backgroundColor: "#6b7c5c" }}>Choisir...</option>
                      <option value="bouquet" style={{ backgroundColor: "#6b7c5c" }}>Bouquet personnalisé</option>
                      <option value="mariage" style={{ backgroundColor: "#6b7c5c" }}>Mariage</option>
                      <option value="entreprise" style={{ backgroundColor: "#6b7c5c" }}>Événement entreprise</option>
                      <option value="deuil" style={{ backgroundColor: "#6b7c5c" }}>Service deuil</option>
                      <option value="livraison" style={{ backgroundColor: "#6b7c5c" }}>Livraison</option>
                      <option value="autre" style={{ backgroundColor: "#6b7c5c" }}>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="font-body text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "rgba(250,248,245,0.5)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputClass + " resize-none"}
                    style={inputStyle}
                    placeholder="Décrivez votre projet, l'occasion, vos fleurs préférées..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-body text-sm tracking-widest uppercase py-4 transition-all duration-300 hover:opacity-90 mt-2"
                  style={{ backgroundColor: "#c4847a", color: "#faf8f5" }}
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
