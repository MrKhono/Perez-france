import type { Metadata } from "next"
import Image from "next/image"
import { Sprout, Globe, HandHeart } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/animations/reveal"
import { DonationForm } from "@/components/forms/donation-form"

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez la mission de Perez Chapel France par votre don. Chaque contribution participe à transformer des vies.",
}

const impacts = [
  {
    icon: Sprout,
    title: "Soutenir l'œuvre",
    description: "Vos dons permettent de faire vivre les cultes, les enseignements et les activités.",
  },
  {
    icon: Globe,
    title: "Évangéliser",
    description: "Annoncer la Bonne Nouvelle dans notre ville et soutenir les actions missionnaires.",
  },
  {
    icon: HandHeart,
    title: "Aider les plus fragiles",
    description: "Accompagner les personnes dans le besoin au sein et autour de notre communauté.",
  },
]

export default function DonPage() {
  return (
    <>
      <PageHero
        title="Faire un don"
        subtitle="« Que chacun donne comme il l'a résolu en son cœur, avec joie. » — 2 Corinthiens 9:7"
        image="/give-hands.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-balance font-serif text-3xl font-bold text-primary">
                    Votre générosité transforme des vies
                  </h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Chaque don, quel qu&apos;en soit le montant, participe à l&apos;avancement du
                    Royaume de Dieu et au rayonnement de notre église dans la communauté.
                  </p>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/give-hands.png"
                    alt="Des mains unies dans un geste de générosité"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <ul className="flex flex-col gap-5">
                  {impacts.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <item.icon className="size-6" />
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <DonationForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
