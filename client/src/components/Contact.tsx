/*
 * JARDIN DES FÉES — Contact Section
 * Style: Fond vert mousse, informations pratiques
 */

import { useEffect, useRef } from "react";

export default function Contact() {
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

          {/* Right — Empty for spacing */}
          <div className="w-full lg:w-7/12" />
        </div>
      </div>
    </section>
  );
}
