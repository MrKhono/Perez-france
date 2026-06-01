import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"
import { CHURCH } from "@/lib/site-data"

export function FinalCta() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-14">
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Venez vivre un culte avec nous
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Les portes de Perez Chapel France vous sont grandes ouvertes. Que vous soyez de
              passage ou en recherche d&apos;une église, vous êtes les bienvenus.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="size-4 text-accent" />
              {CHURCH.addressShort}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/devenir-membre">
                  Devenir membre
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
