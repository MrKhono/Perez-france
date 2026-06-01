import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/animations/reveal"
import { FOUNDERS } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Nos Fondateurs",
  description:
    "Découvrez les fondateurs du réseau Perez Chapel International et leur vision pour transformer les générations.",
}

export default function FondateursPage() {
  return (
    <>
      <PageHero
        title="Nos Fondateurs"
        subtitle="Une vision née de la foi, portée par des serviteurs dévoués à l'avancement du Royaume."
        image="/img/fondateurs.png"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/img/fondateurs.png"
                  alt={FOUNDERS.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal direction="left" className="flex flex-col gap-5">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {FOUNDERS.role}
              </span>
              <h2 className="text-pretty text-3xl font-bold text-primary md:text-4xl">{FOUNDERS.name}</h2>
              {FOUNDERS.bio.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="Le réseau" title="Perez Chapel International" align="center" />
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="leading-relaxed text-muted-foreground">
              {FOUNDERS.network}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
