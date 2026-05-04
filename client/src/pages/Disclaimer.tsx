/*
 * JARDIN DES FÉES — Disclaimer
 * Style: Sobre, élégant, charbon avec contenu lisible
 */

import Breadcrumb from "@/components/Breadcrumb";

export default function Disclaimer() {
  return (
    <div style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
      {/* Header spacing */}
      <div style={{ height: "80px" }}></div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1
          className="font-display text-4xl font-semibold mb-12"
          style={{ color: "#1e1e1e" }}
        >
          Disclaimer
        </h1>

        <div className="space-y-8">
          {/* Section 1: Avertissement général */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Avertissement général
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Ce site web et son contenu sont fournis « tels quels » sans garantie
              d'aucune sorte, explicite ou implicite. Au Jardin des Fées ne fait
              aucune déclaration concernant l'exactitude, l'intégralité, la
              fiabilité ou la pertinence du contenu présenté sur ce site.
            </p>
          </section>

          {/* Section 2: Limitation de responsabilité */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Limitation de responsabilité
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              En aucun cas, Au Jardin des Fées ne sera responsable des dommages
              directs, indirects, accessoires, spéciaux ou consécutifs résultant
              de :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                L'accès ou l'utilisation de ce site web
              </li>
              <li className="font-body text-base">
                L'incapacité à accéder ou utiliser ce site web
              </li>
              <li className="font-body text-base">
                Les informations ou services fournis sur ce site
              </li>
              <li className="font-body text-base">
                Les virus, vers ou autres éléments nuisibles
              </li>
              <li className="font-body text-base">
                Les erreurs ou omissions dans le contenu
              </li>
            </ul>
          </section>

          {/* Section 3: Exactitude du contenu */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Exactitude du contenu
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Bien que nous nous efforcions de maintenir les informations sur ce
              site à jour et exactes, nous ne pouvons pas garantir :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                L'exactitude de tous les prix et disponibilités de produits
              </li>
              <li className="font-body text-base">
                La précision des descriptions de produits
              </li>
              <li className="font-body text-base">
                La disponibilité des services mentionnés
              </li>
              <li className="font-body text-base">
                Les horaires d'ouverture et les conditions de livraison
              </li>
            </ul>
            <p
              className="font-body text-base leading-relaxed mt-4"
              style={{ color: "#3a3a3a" }}
            >
              Pour les informations les plus précises et à jour, veuillez nous
              contacter directement par téléphone ou email.
            </p>
          </section>

          {/* Section 4: Images et contenu visuel */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Images et contenu visuel
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Les images de produits affichées sur ce site sont à titre indicatif.
              Les arrangements floraux et compositions peuvent varier selon la
              disponibilité des fleurs et les saisons. Les couleurs et les détails
              peuvent différer légèrement des photos en raison des variations
              naturelles des fleurs et des limitations de la photographie.
            </p>
          </section>

          {/* Section 5: Liens externes */}
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
              Ce site peut contenir des liens vers des sites web externes. Au
              Jardin des Fées n'est pas responsable du contenu, de la précision ou
              des pratiques de confidentialité de ces sites externes. L'inclusion
              d'un lien ne constitue pas une approbation ou une recommandation du
              site lié.
            </p>
          </section>

          {/* Section 6: Utilisation acceptable */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Utilisation acceptable
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Vous acceptez d'utiliser ce site uniquement à des fins légales et de
              ne pas :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                Reproduire ou copier le contenu sans autorisation
              </li>
              <li className="font-body text-base">
                Utiliser le site pour des activités illégales
              </li>
              <li className="font-body text-base">
                Perturber le fonctionnement du site
              </li>
              <li className="font-body text-base">
                Transmettre des virus ou codes nuisibles
              </li>
              <li className="font-body text-base">
                Usurper l'identité d'une autre personne
              </li>
            </ul>
          </section>

          {/* Section 7: Modifications du site */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Modifications du site
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Au Jardin des Fées se réserve le droit de modifier, suspendre ou
              arrêter le site à tout moment, sans préavis. Nous ne serons pas
              responsables des conséquences de ces modifications.
            </p>
          </section>

          {/* Section 8: Loi applicable */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Loi applicable
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Ce disclaimer est régi par la loi française. Tout litige découlant de
              l'utilisation de ce site sera soumis à la juridiction des tribunaux
              français.
            </p>
          </section>

          {/* Section 9: Contact */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Questions ou préoccupations
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              Si vous avez des questions ou des préoccupations concernant ce
              disclaimer, veuillez nous contacter :
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
