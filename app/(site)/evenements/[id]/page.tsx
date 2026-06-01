import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxImage } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"
import { EVENTS } from "@/lib/site-data"
import { formatEventDate } from "@/lib/format"

export function generateStaticParams() {
  return EVENTS.map((event) => ({ id: event.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const event = EVENTS.find((e) => e.id === id)
  if (!event) return { title: "Événement introuvable" }
  return { title: event.title, description: event.description }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = EVENTS.find((e) => e.id === id)
  if (!event) notFound()

  return (
    <>
      <section className="relative flex h-[46vh] min-h-[340px] items-center overflow-hidden">
        <ParallaxImage src={event.image} alt={event.title} className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-16 text-white sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {event.category}
            </span>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {event.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
          <Reveal>
            <div className="prose-lg space-y-5 leading-relaxed text-muted-foreground">
              <p className="text-lg leading-relaxed">{event.description}</p>
              <p>
                Cet événement est ouvert à tous. Que vous soyez membre de longue date ou que vous
                nous rejoigniez pour la première fois, vous êtes le bienvenu pour vivre ce moment
                fort avec notre communauté.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-lg font-semibold text-primary">Informations</h2>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Calendar className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="capitalize">{formatEventDate(event.date)}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{event.time}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{event.location}</span>
                </li>
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link href="/contact">Demander des informations</Link>
              </Button>
            </aside>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link href="/evenements" className="inline-flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Retour aux événements
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
