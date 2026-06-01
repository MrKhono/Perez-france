import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Revivez en images les moments forts de la vie de Perez Chapel France : cultes, événements et vie communautaire.",
}

export default function GaleriePage() {
  return (
    <>
      <PageHero
        title="Galerie"
        subtitle="Quelques instants partagés au sein de notre communauté, en cultes et en événements."
        image="/worship-hero.png"
      />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}
