import type { Metadata } from "next"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/animations/reveal"
import { ContactForm } from "@/components/forms/contact-form"
import { CHURCH, WEEKLY_PROGRAM } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Perez Chapel France. Retrouvez notre adresse à Pantin, nos horaires et notre formulaire de contact.",
}

export default function ContactPage() {
  const infos = [
    { icon: MapPin, label: "Adresse", value: CHURCH.address },
    { icon: Mail, label: "Email", value: CHURCH.email },
    { icon: Phone, label: "Téléphone", value: CHURCH.phone },
  ]

  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Une question, une demande de prière ou l'envie de nous rendre visite ? Écrivez-nous."
        image="/worship-hero.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary">Nos coordonnées</h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
                </div>
                <ul className="flex flex-col gap-5">
                  {infos.map((info) => (
                    <li key={info.label} className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <info.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-primary">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="size-5 text-accent" />
                    <h3 className="font-serif text-lg font-semibold">Horaires des cultes</h3>
                  </div>
                  <ul className="mt-4 flex flex-col gap-3 text-sm">
                    {WEEKLY_PROGRAM.map((item) => (
                      <li key={item.title} className="flex justify-between gap-4">
                        <span className="text-muted-foreground">{item.title}</span>
                        <span className="font-medium text-primary">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                  <iframe
                    title="Localisation de Perez Chapel France"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.405%2C48.892%2C2.420%2C48.900&layer=mapnik&marker=48.896%2C2.412"
                    className="h-64 w-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
