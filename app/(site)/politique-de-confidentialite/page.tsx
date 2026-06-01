import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/animations/reveal"
import { LegalSection } from "@/components/legal-content"
import { CHURCH } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles de Perez Chapel France (RGPD).",
}

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles."
        image="/worship-hero.png"
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <LegalSection title="Introduction">
              <p>
                {CHURCH.name} accorde une grande importance à la protection de vos données
                personnelles. La présente politique décrit la manière dont nous traitons les
                informations que vous nous transmettez, conformément au Règlement Général sur la
                Protection des Données (RGPD).
              </p>
            </LegalSection>

            <LegalSection title="Données collectées">
              <p>
                Nous collectons uniquement les données que vous nous fournissez volontairement via
                nos formulaires (contact, adhésion, don) : nom, prénom, adresse email, numéro de
                téléphone et, le cas échéant, les informations relatives à votre demande.
              </p>
            </LegalSection>

            <LegalSection title="Finalités du traitement">
              <p>Vos données sont utilisées pour :</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>répondre à vos demandes de contact ;</li>
                <li>traiter les demandes d&apos;adhésion à l&apos;église ;</li>
                <li>gérer les dons et émettre les reçus correspondants ;</li>
                <li>vous informer de la vie et des événements de l&apos;église, avec votre accord.</li>
              </ul>
            </LegalSection>

            <LegalSection title="Conservation des données">
              <p>
                Vos données sont conservées pendant la durée strictement nécessaire aux finalités
                pour lesquelles elles ont été collectées, puis archivées ou supprimées
                conformément aux obligations légales.
              </p>
            </LegalSection>

            <LegalSection title="Vos droits">
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement, de limitation et d&apos;opposition au traitement de vos données.
                Vous pouvez exercer ces droits en nous écrivant à {CHURCH.email}.
              </p>
            </LegalSection>

            <LegalSection title="Cookies">
              <p>
                Ce site utilise des cookies afin d&apos;améliorer votre expérience et de mesurer
                l&apos;audience. Vous pouvez accepter, refuser ou personnaliser leur utilisation
                via la bannière prévue à cet effet lors de votre première visite.
              </p>
            </LegalSection>
          </Reveal>
        </div>
      </section>
    </>
  )
}
