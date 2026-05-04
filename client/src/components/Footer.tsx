/*
 * JARDIN DES FÉES — Footer Component
 * Style: Sobre, élégant, charbon avec liens fins
 */

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#1e1e1e" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="font-display text-xl font-semibold mb-2"
              style={{ color: "#faf8f5" }}
            >
              Jardin des Fées
            </h3>
            <p
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(250,248,245,0.4)" }}
            >
              Fleuriste · Palaiseau · Depuis 1994
            </p>
            <p
              className="font-body text-sm font-light leading-relaxed"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(250,248,245,0.4)" }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Nos Services", href: "#services" },
                { label: "Nos Produits", href: "#produits" },
                { label: "Service Deuil", href: "#deuil" },
                { label: "Notre Histoire", href: "#histoire" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm font-light transition-colors hover:text-[#c4847a]"
                    style={{ color: "rgba(250,248,245,0.55)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos pratiques */}
          <div>
            <p
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(250,248,245,0.4)" }}
            >
              Infos pratiques
            </p>
            <div className="space-y-4">
              <div>
                <p
                  className="font-body text-xs uppercase tracking-wider mb-1"
                  style={{ color: "rgba(250,248,245,0.35)" }}
                >
                  Adresse
                </p>
                <p
                  className="font-body text-sm font-light"
                  style={{ color: "rgba(250,248,245,0.55)" }}
                >
                  24 Rue de Paris
                  <br />
                  Palaiseau, 91120
                  <br />
                  Au centre-ville, 3 min à pied de la Gare RER
                </p>
              </div>
              <div>
                <p
                  className="font-body text-xs uppercase tracking-wider mb-1"
                  style={{ color: "rgba(250,248,245,0.35)" }}
                >
                  Horaires
                </p>
                <p
                  className="font-body text-sm font-light"
                  style={{ color: "rgba(250,248,245,0.55)" }}
                >
                  Mar–Ven : 9h–19h
                  <br />
                  Sam : 9h–20h
                  <br />
                  Dim : 9h–13h
                </p>
              </div>
              <div>
                <p
                  className="font-body text-xs uppercase tracking-wider mb-1"
                  style={{ color: "rgba(250,248,245,0.35)" }}
                >
                  Livraison
                </p>
                <p
                  className="font-body text-sm font-light"
                  style={{ color: "rgba(250,248,245,0.55)" }}
                >
                  À partir de 35 €
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col gap-4"
          style={{ borderColor: "rgba(250,248,245,0.08)" }}
        >
          {/* Copyright and legal links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              className="font-body text-xs font-light"
              style={{ color: "rgba(250,248,245,0.3)" }}
            >
              © {new Date().getFullYear()} Jardin des Fées — Tous droits réservés
            </p>
            <p
              className="font-body text-xs font-light italic"
              style={{ color: "rgba(250,248,245,0.25)" }}
            >
              Fait avec ❤ à Palaiseau
            </p>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="/mentions-legales"
              className="font-body font-light transition-colors hover:text-[#c4847a]"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              Mentions Légales
            </a>
            <span style={{ color: "rgba(250,248,245,0.2)" }}>·</span>
            <a
              href="/politique-confidentialite"
              className="font-body font-light transition-colors hover:text-[#c4847a]"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              Politique de Confidentialité
            </a>
            <span style={{ color: "rgba(250,248,245,0.2)" }}>·</span>
            <a
              href="/politique-cookies"
              className="font-body font-light transition-colors hover:text-[#c4847a]"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              Politique des Cookies
            </a>
            <span style={{ color: "rgba(250,248,245,0.2)" }}>·</span>
            <a
              href="/disclaimer"
              className="font-body font-light transition-colors hover:text-[#c4847a]"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
