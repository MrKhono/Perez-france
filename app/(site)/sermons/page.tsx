import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SermonList } from "@/components/sermons/sermon-list"

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Écoutez et revivez les prédications de Perez Chapel France. Enseignements bibliques classés par thème.",
}

export default function SermonsPage() {
  return (
    <>
      <PageHero
        title="Sermons & Enseignements"
        subtitle="Nourrissez votre foi avec nos prédications, disponibles en replay et classées par thème."
        image="/worship-hero.png"
      />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SermonList />
        </div>
      </section>
    </>
  )
}
