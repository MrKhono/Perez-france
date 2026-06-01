"use client"

import { useState } from "react"
import { PlayCircle, Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Stagger, StaggerItem } from "@/components/animations/reveal"
import { formatDateFr } from "@/lib/format"
import { SERMONS, SERMON_CATEGORIES } from "@/lib/site-data"

export function SermonList() {
  const [active, setActive] = useState("Toutes")

  const filtered =
    active === "Toutes" ? SERMONS : SERMONS.filter((s) => s.category === active)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {SERMON_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((sermon) => (
          <StaggerItem key={sermon.id} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative flex aspect-video items-center justify-center bg-primary">
                <PlayCircle className="size-14 text-primary-foreground/90" />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {sermon.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-primary">{sermon.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{sermon.speaker}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {sermon.description}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {formatDateFr(sermon.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {sermon.duration}
                  </span>
                </div>
                <Button asChild className="mt-5 w-full">
                  <a href={sermon.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    Regarder
                  </a>
                </Button>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}
