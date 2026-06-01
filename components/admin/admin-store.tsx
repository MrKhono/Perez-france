"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { SERMONS, EVENTS, TEAM, type Sermon, type ChurchEvent, type TeamMember } from "@/lib/site-data"

type AdminState = {
  sermons: Sermon[]
  events: ChurchEvent[]
  team: TeamMember[]
  addSermon: (s: Omit<Sermon, "id">) => void
  updateSermon: (id: string, s: Omit<Sermon, "id">) => void
  deleteSermon: (id: string) => void
  addEvent: (e: Omit<ChurchEvent, "id">) => void
  updateEvent: (id: string, e: Omit<ChurchEvent, "id">) => void
  deleteEvent: (id: string) => void
  addMember: (m: Omit<TeamMember, "id">) => void
  updateMember: (id: string, m: Omit<TeamMember, "id">) => void
  deleteMember: (id: string) => void
}

const AdminContext = createContext<AdminState | null>(null)

const uid = () => Math.random().toString(36).slice(2, 9)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [sermons, setSermons] = useState<Sermon[]>(SERMONS)
  const [events, setEvents] = useState<ChurchEvent[]>(EVENTS)
  const [team, setTeam] = useState<TeamMember[]>(TEAM)

  const value = useMemo<AdminState>(
    () => ({
      sermons,
      events,
      team,
      addSermon: (s) => setSermons((prev) => [{ ...s, id: uid() }, ...prev]),
      updateSermon: (id, s) =>
        setSermons((prev) => prev.map((item) => (item.id === id ? { ...s, id } : item))),
      deleteSermon: (id) => setSermons((prev) => prev.filter((item) => item.id !== id)),
      addEvent: (e) => setEvents((prev) => [{ ...e, id: uid() }, ...prev]),
      updateEvent: (id, e) =>
        setEvents((prev) => prev.map((item) => (item.id === id ? { ...e, id } : item))),
      deleteEvent: (id) => setEvents((prev) => prev.filter((item) => item.id !== id)),
      addMember: (m) => setTeam((prev) => [{ ...m, id: uid() }, ...prev]),
      updateMember: (id, m) =>
        setTeam((prev) => prev.map((item) => (item.id === id ? { ...m, id } : item))),
      deleteMember: (id) => setTeam((prev) => prev.filter((item) => item.id !== id)),
    }),
    [sermons, events, team],
  )

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export function useAdmin() {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider")
  return ctx
}
