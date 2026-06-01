import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"
import { Counter } from "@/components/animations/counter"
import { ParallaxImage } from "@/components/animations/parallax"
import { STATS } from "@/lib/site-data"

export function AboutPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <ParallaxImage
                src="/worship-hero.png"
                alt="Communauté de Perez Chapel France"
                className="aspect-[4/3] w-full"
                strength={40}
              />
            </div>
          </Reveal>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Qui sommes-nous
            </span>
            <Reveal>
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Une famille spirituelle qui croit en la transformation
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Perez Chapel France est la branche française du réseau mondial {""}
                Perez Chapel International. Enracinés dans la Bible, nous croyons en la puissance
                de l&apos;Évangile pour transformer les vies, les familles et les générations.
                Notre désir est de voir chaque personne s&apos;épanouir spirituellement,
                physiquement, économiquement et émotionnellement.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild className="mt-7 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/a-propos">
                  En savoir plus
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        
      </div>
    </section>
  )
}
