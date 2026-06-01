import type { Metadata } from "next"
import { Target, Eye, Heart } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal"
import { VALUES } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la vision et les valeurs de Perez Chapel France, église pentecôtiste et charismatique à Pantin.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="À propos de notre église"
        subtitle="Une histoire de foi, une vision de transformation, des valeurs enracinées dans la Parole."
        image="/worship-hero.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Notre histoire" title="Aux origines de Perez Chapel France" align="left" />
          <Reveal>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Perez Chapel France est née du désir d&apos;implanter, au cœur de Pantin, une
                communauté vivante issue du réseau mondial Perez Chapel International. Fondée sur
                la conviction que l&apos;Évangile a le pouvoir de transformer chaque vie, notre
                église s&apos;est construite autour de la prière, de l&apos;enseignement de la
                Parole et de l&apos;amour fraternel.
              </p>
              <p>
                Au fil des années, la communauté a grandi, accueillant des familles et des
                personnes de tous horizons, unies par une même espérance. Aujourd&apos;hui, nous
                continuons de croître en restant fidèles à notre appel : percer dans la prière et
                transformer les générations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Eye className="size-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-primary">Notre vision</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Atteindre notre génération par la prédication de l&apos;Évangile, accompagnée de
                  signes, de prodiges et de la puissance de Dieu, afin que les vies, les familles
                  et la société tout entière soient transformées.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex size-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Target className="size-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-primary">Notre mission</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Veiller au bien-être spirituel, physique, économique et émotionnel de chacun, en
                  formant des disciples affermis et des leaders qui impactent leur entourage et
                  leur génération.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui nous anime au quotidien"
            description="Quatre piliers qui guident notre vie d'église et notre marche avec Dieu."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Heart className="size-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
