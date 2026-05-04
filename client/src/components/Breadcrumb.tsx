/*
 * JARDIN DES FÉES — Breadcrumb Component
 * Style: Sobre, élégant, charbon avec navigation fine
 */

import { useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const [location] = useLocation();

  const breadcrumbMap: { [key: string]: BreadcrumbItem[] } = {
    "/mentions-legales": [
      { label: "Accueil", href: "/" },
      { label: "Mentions Légales", href: "/mentions-legales" },
    ],
    "/politique-confidentialite": [
      { label: "Accueil", href: "/" },
      { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
    ],
    "/politique-cookies": [
      { label: "Accueil", href: "/" },
      { label: "Politique des Cookies", href: "/politique-cookies" },
    ],
    "/disclaimer": [
      { label: "Accueil", href: "/" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const breadcrumbs = breadcrumbMap[location];

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className="max-w-4xl mx-auto px-6 lg:px-12 py-4"
      style={{ backgroundColor: "#faf8f5" }}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap gap-2 items-center">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <span
                className="font-body text-xs"
                style={{ color: "rgba(30,30,30,0.3)" }}
              >
                /
              </span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span
                className="font-body text-xs font-light"
                style={{ color: "rgba(30,30,30,0.5)" }}
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="font-body text-xs font-light transition-colors hover:text-[#c4847a]"
                style={{ color: "rgba(30,30,30,0.6)" }}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
