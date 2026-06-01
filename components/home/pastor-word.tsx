import Image from "next/image"
import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"

export function PastorWord() {
  return (
    <section className="bg-primary py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/img/elder.jpg"
                  alt="Ancienne Priscille Grâce, pasteure principale"
                  width={500}
                  height={620}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl bg-accent px-5 py-3 text-center shadow-lg">
                <p className="font-serif font-semibold text-primary">Ancienne Priscille Grâce</p>
                <p className="text-xs font-medium text-primary/80">Pasteure principale</p>
              </div>
            </div>
          </Reveal>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Le mot du Pasteur
            </span>
            <Quote className="mt-5 size-10 text-accent" />
            <Reveal>
              <blockquote className="mt-4 text-balance font-serif text-2xl font-medium leading-snug sm:text-3xl">
                « Dieu a un plan glorieux pour votre vie. Notre appel est de vous accompagner
                afin que vous perciez dans tous les domaines et que vous transformiez votre
                génération. »
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-white/80">
                Avec passion et compassion, l&apos;Ancienne Priscille Grâce enseigne la Parole de
                Dieu et veille au bien-être de chaque membre de la communauté. Découvrez son
                ministère et sa vision.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild className="mt-7 bg-accent text-primary hover:bg-accent/90">
                <Link href="/notre-pasteur">
                  Découvrir notre pasteur
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
