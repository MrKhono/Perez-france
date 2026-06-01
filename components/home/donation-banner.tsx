import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"
import { ParallaxImage } from "@/components/animations/parallax"

export function DonationBanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <ParallaxImage src="/give-hands.png" alt="" className="absolute inset-0" strength={60} />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <Reveal>
          <Heart className="mx-auto size-12 text-accent" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Soutenez l&apos;œuvre de Dieu
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-white/85">
            Votre générosité permet de faire avancer l&apos;Évangile, de soutenir les actions
            sociales et d&apos;accompagner notre communauté. Chaque don, ponctuel ou régulier,
            compte.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Button asChild size="lg" className="mt-8 bg-accent text-primary hover:bg-accent/90">
            <Link href="/faire-un-don">
              <Heart className="size-5" />
              Faire un don
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
