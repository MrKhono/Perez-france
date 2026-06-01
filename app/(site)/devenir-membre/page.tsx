import type { Metadata } from "next"
import { HeartHandshake, Users, BookOpen } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/animations/reveal"
import { MembershipForm } from "@/components/forms/membership-form"

export const metadata: Metadata = {
  title: "Devenir membre",
  description:
    "Rejoignez la famille de Perez Chapel France. Remplissez le formulaire pour entamer votre intégration.",
}

const benefits = [
  {
    icon: Users,
    title: "Une famille",
    description: "Intégrez une communauté chaleureuse qui vous accompagne à chaque étape.",
  },
  {
    icon: BookOpen,
    title: "Un enseignement",
    description: "Grandissez dans la foi grâce à des enseignements solides et accessibles.",
  },
  {
    icon: HeartHandshake,
    title: "Un service",
    description: "Mettez vos dons au service de Dieu et de la communauté à travers nos ministères.",
  },
]

export default function MembrePage() {
  return (
    <>
      <PageHero
        title="Devenir membre"
        subtitle="Faites le premier pas pour rejoindre notre communauté et grandir avec nous dans la foi."
        image="/worship-hero.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-balance font-serif text-3xl font-bold text-primary">
                    Pourquoi nous rejoindre ?
                  </h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Devenir membre, c&apos;est choisir de cheminer ensemble vers la transformation
                    que Dieu désire pour chaque génération. Voici ce que vous trouverez parmi nous.
                  </p>
                </div>
                <ul className="flex flex-col gap-5">
                  {benefits.map((b) => (
                    <li key={b.title} className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <b.icon className="size-6" />
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-primary">{b.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {b.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <MembershipForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
