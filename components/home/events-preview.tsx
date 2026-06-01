import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { EventCard } from "@/components/event-card"
import { Stagger, StaggerItem } from "@/components/animations/reveal"
import { EVENTS } from "@/lib/site-data"

export function EventsPreview() {
  const upcoming = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3)

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Agenda"
          title="Événements à venir"
          description="Rejoignez-nous lors de nos prochains rassemblements et temps forts spirituels."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => (
            <StaggerItem key={event.id} className="h-full">
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/evenements">
              Tous les événements
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
