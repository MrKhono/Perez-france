import type { Metadata } from "next"
import { CalendarClock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal"
import { EventCard } from "@/components/event-card"
import { EVENTS, WEEKLY_PROGRAM } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Découvrez le programme hebdomadaire et les prochains événements de Perez Chapel France.",
}

export default function EvenementsPage() {
  return (
    <>
      <PageHero
        title="Événements & Programme"
        subtitle="Rejoignez-nous lors de nos cultes hebdomadaires et de nos rassemblements spéciaux."
        image="/worship-hero.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Chaque semaine"
            title="Notre programme régulier"
            description="Des rendez-vous réguliers pour grandir ensemble dans la foi et la prière."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WEEKLY_PROGRAM.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <CalendarClock className="size-6" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent">
                    {item.day}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.time}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Agenda"
            title="Nos prochains événements"
            description="Notez ces dates et venez vivre des temps forts avec toute la communauté."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {EVENTS.map((event) => (
              <StaggerItem key={event.id} className="h-full">
                <EventCard event={event} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14 text-center">
            <p className="text-sm text-muted-foreground">
              Pour toute information sur nos événements, contactez-nous ou suivez-nous sur les
              réseaux sociaux.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
