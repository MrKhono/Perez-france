import Image from "next/image"
import type { TeamMember } from "@/lib/site-data"

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={`Portrait de ${member.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-serif text-lg font-semibold text-primary">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
      </div>
    </div>
  )
}
