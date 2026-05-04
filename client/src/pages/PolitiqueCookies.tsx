/*
 * JARDIN DES FÉES — Politique des Cookies
 * Style: Sobre, élégant, charbon avec contenu lisible
 */

export default function PolitiqueCookies() {
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
          Politique des Cookies
        </h1>

        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Introduction
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Au Jardin des Fées utilise des cookies et technologies similaires pour
              améliorer votre expérience sur notre site web. Cette politique explique
              ce que sont les cookies, comment nous les utilisons, et vos droits
              concernant leur utilisation.
            </p>
          </section>

          {/* Section 2: Qu'est-ce qu'un cookie ? */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Qu'est-ce qu'un cookie ?
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur,
              tablette, téléphone) lorsque vous visitez notre site. Les cookies
              permettent au site de reconnaître votre appareil lors de visites ultérieures
              et de mémoriser certaines informations sur vos préférences.
            </p>
          </section>

          {/* Section 3: Types de cookies */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Types de cookies que nous utilisons
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Nous utilisons les types de cookies suivants :
            </p>
            <ul
              className="list-disc list-inside space-y-3"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du
                site (authentification, sécurité, préférences utilisateur)
              </li>
              <li className="font-body text-base">
                <strong>Cookies de performance :</strong> Nous aident à comprendre
                comment vous utilisez le site (pages visitées, temps passé)
              </li>
              <li className="font-body text-base">
                <strong>Cookies de fonctionnalité :</strong> Mémorisent vos préférences
                et paramètres pour personnaliser votre expérience
              </li>
              <li className="font-body text-base">
                <strong>Cookies de marketing :</strong> Utilisés pour vous afficher
                des publicités pertinentes (si vous consentez)
              </li>
            </ul>
          </section>

          {/* Section 4: Durée de conservation */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Durée de conservation des cookies
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Les cookies ont différentes durées de vie :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                <strong>Cookies de session :</strong> Supprimés à la fermeture du
                navigateur
              </li>
              <li className="font-body text-base">
                <strong>Cookies persistants :</strong> Conservés pendant une période
                définie (généralement 1 à 2 ans)
              </li>
            </ul>
          </section>

          {/* Section 5: Consentement */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Votre consentement
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Conformément à la loi française et au RGPD, nous obtenons votre
              consentement avant de placer des cookies non-essentiels sur votre
              appareil. Vous pouvez :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                Accepter tous les cookies
              </li>
              <li className="font-body text-base">
                Refuser les cookies non-essentiels
              </li>
              <li className="font-body text-base">
                Personnaliser vos préférences de cookies
              </li>
            </ul>
          </section>

          {/* Section 6: Gestion des cookies */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Comment gérer les cookies
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Vous pouvez contrôler les cookies via les paramètres de votre navigateur :
            </p>
            <ul
              className="list-disc list-inside space-y-2 mb-4"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité →
                Cookies et autres données de site
              </li>
              <li className="font-body text-base">
                <strong>Firefox :</strong> Paramètres → Vie privée et sécurité →
                Cookies et données de site
              </li>
              <li className="font-body text-base">
                <strong>Safari :</strong> Préférences → Confidentialité → Gérer les
                données de site web
              </li>
              <li className="font-body text-base">
                <strong>Edge :</strong> Paramètres → Confidentialité, recherche et
                services → Effacer les données de navigation
              </li>
            </ul>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              <strong>Attention :</strong> Le refus de certains cookies peut affecter
              votre expérience sur le site et réduire la fonctionnalité de certaines
              pages.
            </p>
          </section>

          {/* Section 7: Cookies tiers */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Cookies tiers
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Notre site peut contenir des cookies placés par des tiers (par exemple,
              des services d'analyse ou de publicité). Ces tiers sont responsables de
              leurs propres politiques de cookies. Nous vous recommandons de consulter
              leurs politiques de confidentialité respectives.
            </p>
          </section>

          {/* Section 8: Sécurité */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Sécurité des cookies
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Nous utilisons des mesures de sécurité pour protéger les informations
              stockées dans les cookies. Cependant, aucune méthode de transmission sur
              Internet n'est totalement sécurisée.
            </p>
          </section>

          {/* Section 9: Modifications */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Modifications de cette politique
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Nous pouvons mettre à jour cette Politique des Cookies à tout moment.
              Les modifications seront publiées sur cette page avec une nouvelle date
              de mise à jour.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Nous contacter
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-3"
              style={{ color: "#3a3a3a" }}
            >
              Si vous avez des questions concernant cette Politique des Cookies,
              veuillez nous contacter :
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
