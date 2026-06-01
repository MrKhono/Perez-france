import type { Metadata } from "next"
import Image from "next/image"
import { Quote } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/animations/reveal"

export const metadata: Metadata = {
  title: "Notre Pasteur",
  description:
    "Rencontrez l'Ancienne Priscille Grâce, pasteure principale de Perez Chapel France.",
}

export default function PastorPage() {
  return (
    <>
      <PageHero
        title="Notre Pasteur"
        subtitle="Ancienne Priscille Grâce, pasteure principale de Perez Chapel France."
        image="/img/elder.jpg"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/img/elder.jpg"
                    alt="Ancienne Priscille Grâce"
                    width={520}
                    height={650}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="mt-5 rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                  <p className="font-serif text-xl font-bold text-primary">Ancienne Priscille Grâce</p>
                  <p className="mt-1 text-sm font-medium text-accent">Pasteure principale</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  Une servante au cœur de berger
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                  <p>
                    L&apos;Ancienne Priscille Grâce est la pasteure principale de Perez Chapel
                    France. Femme de foi et de prière, elle consacre sa vie au service de Dieu et
                    à l&apos;édification de la communauté qui lui est confiée.
                  </p>
                  <p>
                    Passionnée par l&apos;enseignement de la Parole, elle s&apos;attache à rendre
                    les vérités bibliques vivantes et accessibles, afin que chaque membre puisse
                    grandir dans sa relation avec Dieu et marcher dans la plénitude de son appel.
                  </p>
                  <p>
                    Son ministère se distingue par un profond accompagnement pastoral : elle est
                    proche des familles, attentive aux besoins de chacun, et engagée pour le
                    bien-être spirituel, émotionnel et social de la communauté.
                  </p>
                  <p>
                    Portée par une vision de transformation des générations, elle œuvre pour que
                    Perez Chapel France soit un lieu de percée, de restauration et
                    d&apos;épanouissement pour tous ceux qui en franchissent les portes.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <blockquote className="mt-10 rounded-2xl border-l-4 border-accent bg-secondary p-7">
                  <Quote className="size-8 text-accent" />
                  <p className="mt-3 font-serif text-xl font-medium leading-snug text-primary">
                    « Dieu désire que vous perciez dans tous les domaines de votre vie. Mon désir
                    est de vous y accompagner, pas à pas, par la Parole et par la prière. »
                  </p>
                  <footer className="mt-4 text-sm font-medium text-muted-foreground">
                    — Ancienne Priscille Grâce
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
