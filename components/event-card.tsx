import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { ChurchEvent } from "@/lib/site-data"
import { formatEventDate } from "@/lib/format"

export function EventCard({ event }: { event: ChurchEvent }) {
  return (
    <Link
      href={`/evenements/${event.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <Badge className="absolute left-4 top-4 bg-accent text-primary hover:bg-accent">
          {event.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-balance font-serif text-xl font-semibold text-primary">
          {event.title}
        </h3>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Calendar className="size-4 text-accent" />
            {formatEventDate(event.date)}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4 text-accent" />
            {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-accent" />
            {event.location}
          </p>
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          Voir le détail
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
