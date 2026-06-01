import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/animations/reveal"
import { LegalSection } from "@/components/legal-content"
import { CHURCH } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Perez Chapel France.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        subtitle="Informations légales relatives à l'édition et l'hébergement du site."
        image="/worship-hero.png"
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <LegalSection title="Éditeur du site">
              <p>
                Le présent site est édité par {CHURCH.name}, association cultuelle dont le siège
                est situé au {CHURCH.address}.
              </p>
              <p>
                Email : {CHURCH.email}
                <br />
                Téléphone : {CHURCH.phone}
              </p>
            </LegalSection>

            <LegalSection title="Directeur de la publication">
              <p>
                Le directeur de la publication est le représentant légal de {CHURCH.name}.
              </p>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                États-Unis.
              </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, vidéos)
                est la propriété de {CHURCH.name}, sauf mention contraire. Toute reproduction,
                même partielle, est interdite sans autorisation préalable.
              </p>
            </LegalSection>

            <LegalSection title="Responsabilité">
              <p>
                {CHURCH.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations
                diffusées sur ce site mais ne saurait être tenue responsable des erreurs ou
                omissions, ni de l&apos;utilisation qui pourrait en être faite.
              </p>
            </LegalSection>
          </Reveal>
        </div>
      </section>
    </>
  )
}
