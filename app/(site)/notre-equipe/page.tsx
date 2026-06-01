import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Stagger, StaggerItem } from "@/components/animations/reveal"
import { TeamCard } from "@/components/team-card"
import { TEAM } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Notre équipe",
  description:
    "Rencontrez l'équipe pastorale et les responsables de ministères de Perez Chapel France.",
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Notre équipe"
        subtitle="Des serviteurs engagés au service de la communauté et du Royaume de Dieu."
        image="/worship-hero.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Les responsables"
            title="Ceux qui veillent sur la communauté"
            description="Chaque responsable met ses dons au service de l'église pour accompagner et édifier les membres."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
