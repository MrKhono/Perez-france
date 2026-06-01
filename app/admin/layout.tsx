import type { Metadata } from "next"
import type { ReactNode } from "react"
import { AdminProvider } from "@/components/admin/admin-store"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminMobileNav } from "@/components/admin/admin-mobile-nav"

export const metadata: Metadata = {
  title: "Administration · Perez Chapel France",
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProvider>
      <div className="flex min-h-screen bg-muted">
        <div className="sticky top-0 hidden h-screen md:block">
          <AdminSidebar />
        </div>
        <main className="flex-1 overflow-x-hidden">
          <AdminMobileNav />
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </AdminProvider>
  )
}
