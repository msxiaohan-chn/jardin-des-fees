/*
 * JARDIN DES FÉES — Politique de Confidentialité
 * Style: Sobre, élégant, charbon avec contenu lisible
 */

import Breadcrumb from "@/components/Breadcrumb";

export default function PolitiqueConfidentialite() {
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
          Politique de Confidentialité
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
              Au Jardin des Fées (« nous », « notre ») s'engage à protéger votre
              vie privée. Cette Politique de Confidentialité explique comment nous
              collectons, utilisons, divulguons et sauvegardons vos informations
              lorsque vous visitez notre site web.
            </p>
          </section>

          {/* Section 2: Informations collectées */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Informations que nous collectons
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Nous collectons les informations suivantes :
            </p>
            <ul
              className="list-disc list-inside space-y-2 mb-4"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                <strong>Informations de contact :</strong> Lorsque vous nous
                contactez par téléphone ou email, nous collectons votre nom, votre
                numéro de téléphone et votre adresse email.
              </li>
              <li className="font-body text-base">
                <strong>Données de navigation :</strong> Nous collectons
                automatiquement certaines informations sur votre appareil et votre
                comportement de navigation, notamment votre adresse IP, le type de
                navigateur, les pages visitées et l'heure d'accès.
              </li>
              <li className="font-body text-base">
                <strong>Cookies :</strong> Nous utilisons des cookies pour améliorer
                votre expérience sur notre site.
              </li>
            </ul>
          </section>

          {/* Section 3: Utilisation des données */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Utilisation de vos informations
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Nous utilisons les informations collectées pour :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                Répondre à vos demandes et questions
              </li>
              <li className="font-body text-base">
                Améliorer notre site web et nos services
              </li>
              <li className="font-body text-base">
                Analyser l'utilisation de notre site
              </li>
              <li className="font-body text-base">
                Vous envoyer des informations marketing (si vous y consentez)
              </li>
              <li className="font-body text-base">
                Respecter les obligations légales
              </li>
            </ul>
          </section>

          {/* Section 4: Partage des données */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Partage de vos informations
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Nous ne partageons pas vos informations personnelles avec des tiers,
              sauf si la loi l'exige ou si vous nous y autorisez expressément. Nos
              prestataires de services (hébergement, analyse) sont tenus de
              respecter la confidentialité de vos données.
            </p>
          </section>

          {/* Section 5: Sécurité des données */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Sécurité de vos données
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Nous mettons en place des mesures de sécurité appropriées pour
              protéger vos informations personnelles contre l'accès non autorisé,
              la modification ou la divulgation. Cependant, aucune transmission de
              données sur Internet n'est totalement sécurisée.
            </p>
          </section>

          {/* Section 6: Vos droits */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Vos droits (RGPD)
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous avez les droits suivants :
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                <strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos
                données personnelles
              </li>
              <li className="font-body text-base">
                <strong>Droit de rectification :</strong> Vous pouvez corriger vos
                données inexactes
              </li>
              <li className="font-body text-base">
                <strong>Droit à l'oubli :</strong> Vous pouvez demander la
                suppression de vos données
              </li>
              <li className="font-body text-base">
                <strong>Droit à la portabilité :</strong> Vous pouvez recevoir vos
                données dans un format structuré
              </li>
              <li className="font-body text-base">
                <strong>Droit d'opposition :</strong> Vous pouvez vous opposer au
                traitement de vos données
              </li>
            </ul>
            <p
              className="font-body text-base leading-relaxed mt-4"
              style={{ color: "#3a3a3a" }}
            >
              Pour exercer ces droits, veuillez nous contacter à{" "}
              <a
                href="mailto:caroline.meaux@orange.fr"
                style={{ color: "#c4847a", textDecoration: "none" }}
                className="hover:underline"
              >
                caroline.meaux@orange.fr
              </a>
              .
            </p>
          </section>

          {/* Section 7: Cookies */}
          <section>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "#1e1e1e" }}
            >
              Cookies
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "#3a3a3a" }}
            >
              Notre site utilise des cookies pour améliorer votre expérience. Les
              cookies sont de petits fichiers stockés sur votre appareil qui nous
              aident à :
            </p>
            <ul
              className="list-disc list-inside space-y-2 mb-4"
              style={{ color: "#3a3a3a" }}
            >
              <li className="font-body text-base">
                Mémoriser vos préférences
              </li>
              <li className="font-body text-base">
                Analyser le trafic du site
              </li>
              <li className="font-body text-base">
                Personnaliser votre expérience
              </li>
            </ul>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#3a3a3a" }}
            >
              Vous pouvez contrôler les cookies via les paramètres de votre
              navigateur. Le refus de certains cookies peut affecter votre
              expérience sur le site.
            </p>
          </section>

          {/* Section 8: Modifications */}
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
              Nous pouvons mettre à jour cette Politique de Confidentialité à tout
              moment. Les modifications seront publiées sur cette page avec une
              nouvelle date de mise à jour.
            </p>
          </section>

          {/* Section 9: Contact */}
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
              Si vous avez des questions concernant cette Politique de
              Confidentialité, veuillez nous contacter :
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
