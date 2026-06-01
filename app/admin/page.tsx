"use client"

import Link from "next/link"
import { Mic, CalendarDays, Users, Plus, ArrowRight } from "lucide-react"
import { useAdmin } from "@/components/admin/admin-store"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { formatShortDate } from "@/lib/format"

export default function AdminDashboardPage() {
  const { sermons, events, team } = useAdmin()

  const stats = [
    { label: "Sermons", value: sermons.length, icon: Mic, href: "/admin/sermons" },
    { label: "Événements", value: events.length, icon: CalendarDays, href: "/admin/evenements" },
    { label: "Membres de l'équipe", value: team.length, icon: Users, href: "/admin/equipe" },
  ]

  const upcoming = [...events]
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))
    .slice(0, 4)

  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Tableau de bord"
        description="Gérez le contenu de Perez Chapel France depuis cet espace."
      />

      <div className="grid gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <stat.icon className="size-5" />
              </span>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-4 font-serif text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-semibold text-primary">Prochains événements</h2>
            <Link href="/admin/evenements" className="text-sm font-medium text-accent hover:underline">
              Gérer
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-border">
            {upcoming.map((event) => (
              <li key={event.id} className="flex items-center justify-between gap-4 py-3">
                <div>
                  <p className="text-sm font-medium text-primary">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{formatShortDate(event.date)}</p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {event.category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-serif text-lg font-semibold text-primary">Actions rapides</h2>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/admin/sermons"
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:bg-secondary"
            >
              <Plus className="size-4 text-accent" />
              Ajouter un sermon
            </Link>
            <Link
              href="/admin/evenements"
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:bg-secondary"
            >
              <Plus className="size-4 text-accent" />
              Créer un événement
            </Link>
            <Link
              href="/admin/equipe"
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:bg-secondary"
            >
              <Plus className="size-4 text-accent" />
              Ajouter un membre
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
