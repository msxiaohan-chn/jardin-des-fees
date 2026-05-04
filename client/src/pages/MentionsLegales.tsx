/*
 * JARDIN DES FÉES — Mentions Légales
 * Style: Sobre, élégant, charbon avec contenu lisible
 */

export default function MentionsLegales() {
  return (
    <div style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
      {/* Header spacing */}
      <div style={{ height: "80px" }}></div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1
          className="font-display text-4xl font-semibold mb-12"
          style={{ color: "#1e1e1e" }}
        >
          Mentions Légales
        </h1>

        <div className="space-y-8">
          {/* Section 1: Éditeur */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Éditeur du site
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Nom commercial :</strong> Au Jardin des Fées
            </p>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Responsable :</strong> Caroline Meaux
            </p>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Adresse :</strong> 24 Rue de Paris, 91120 Palaiseau, France
            </p>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Téléphone :</strong> 01 60 14 39 89
            </p>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Email :</strong>{" "}
              <a
                href="mailto:caroline.meaux@orange.fr"
                style={{ color: "#c4847a", textDecoration: "none" }}
                className="hover:underline"
              >
                caroline.meaux@orange.fr
              </a>
            </p>
          </section>

          {/* Section 2: Identification */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Identification de l'entreprise
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>SIRET :</strong> 38977627900072
            </p>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Activité :</strong> Commerce de détail de fleurs et plantes
            </p>
          </section>

          {/* Section 3: Hébergement */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Hébergement du site
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Hébergeur :</strong> Manus
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Le site est hébergé sur les serveurs de Manus, plateforme de
              création de sites web.
            </p>
          </section>

          {/* Section 4: Propriété intellectuelle */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Propriété intellectuelle
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              L'ensemble du contenu de ce site (textes, images, logos, graphismes,
              mises en page) est la propriété exclusive d'Au Jardin des Fées ou
              de ses partenaires. Toute reproduction, représentation, modification,
              publication ou adaptation, totale ou partielle, est interdite sans
              l'autorisation préalable écrite.
            </p>
          </section>

          {/* Section 5: Responsabilité */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Responsabilité
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              Au Jardin des Fées s'efforce de fournir des informations exactes et
              à jour sur ce site. Cependant, nous ne pouvons garantir l'exactitude,
              la complétude ou la pertinence des informations fournies. L'accès à
              ce site se fait à vos risques et périls.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Au Jardin des Fées ne pourra en aucun cas être tenue responsable des
              dommages directs ou indirects résultant de l'accès ou de l'utilisation
              de ce site.
            </p>
          </section>

          {/* Section 6: Liens externes */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Liens externes
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Ce site peut contenir des liens vers des sites externes. Au Jardin
              des Fées ne peut être tenue responsable du contenu de ces sites
              externes ni de leur conformité aux lois applicables.
            </p>
          </section>

          {/* Section 7: Données personnelles */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Données personnelles
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Pour plus d'informations sur le traitement de vos données personnelles,
              veuillez consulter notre{" "}
              <a
                href="/politique-confidentialite"
                style={{ color: "#c4847a", textDecoration: "none" }}
                className="hover:underline"
              >
                Politique de Confidentialité
              </a>
              .
            </p>
          </section>

          {/* Section 8: Contact */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Contact
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              Pour toute question concernant ces mentions légales, veuillez nous
              contacter :
            </p>
            <p
              className="font-body text-base leading-relaxed mb-2"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Email :</strong>{" "}
              <a
                href="mailto:caroline.meaux@orange.fr"
                style={{ color: "#c4847a", textDecoration: "none" }}
                className="hover:underline"
              >
                caroline.meaux@orange.fr
              </a>
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Téléphone :</strong> 01 60 14 39 89
            </p>
          </section>

          {/* Last update */}
          <div
            className="pt-8 mt-8 border-t"
            style={{ borderColor: "#e0d9d3" }}
          >
            <p
              className="font-body text-sm italic"
              style={{ color: "#888888" }}
            >
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div style={{ height: "40px" }}></div>
    </div>
  );
}
