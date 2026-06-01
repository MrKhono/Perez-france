import { BookOpen, Megaphone, Globe, Music, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Stagger, StaggerItem } from "@/components/animations/reveal"
import { MINISTRIES } from "@/lib/site-data"

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Megaphone,
  Globe,
  Music,
}

export function Ministries() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nos ministères"
          title="Servir Dieu et la communauté"
          description="Quatre pôles complémentaires pour grandir dans la foi et impacter notre génération."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MINISTRIES.map((ministry) => {
            const Icon = ICONS[ministry.icon] ?? BookOpen
            return (
              <StaggerItem key={ministry.id}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-primary">
                    {ministry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {ministry.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
