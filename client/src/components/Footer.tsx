/*
 * JARDIN DES FÉES — Footer Component
 * Style: Sobre, élégant, charbon avec liens fins
 * Layout: 4 columns - Brand | Navigation | Practical Info | Legal Links
 */

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#1e1e1e" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
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
              Artisan fleuriste avec plus de 40 ans d'expérience.
            </p>
          </div>

          {/* Column 2: Navigation */}
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

          {/* Column 3: Practical Info */}
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

          {/* Column 4: Legal Links */}
          <div>
            <p
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(250,248,245,0.4)" }}
            >
              Légal
            </p>
            <ul className="space-y-3">
              {[
                { label: "Mentions Légales", href: "/mentions-legales" },
                { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
                { label: "Politique des Cookies", href: "/politique-cookies" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm font-light transition-colors hover:text-[#c4847a]"
                    style={{ color: "rgba(250,248,245,0.55)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(250,248,245,0.08)" }}
        >
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
      </div>
    </footer>
  );
}
