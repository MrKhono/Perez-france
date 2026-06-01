"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Mic, CalendarDays, Users, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/admin", label: "Bord", icon: LayoutDashboard },
  { href: "/admin/sermons", label: "Sermons", icon: Mic },
  { href: "/admin/evenements", label: "Événements", icon: CalendarDays },
  { href: "/admin/equipe", label: "Équipe", icon: Users },
  { href: "/", label: "Site", icon: Home },
]

export function AdminMobileNav() {
  const pathname = usePathname()
  return (
    <div className="sticky top-0 z-30 flex items-center gap-1 overflow-x-auto border-b border-border bg-sidebar px-3 py-2 md:hidden">
      {NAV.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-colors",
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/80",
            )}
          >
            <item.icon className="size-4" />
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
