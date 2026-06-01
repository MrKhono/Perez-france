"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="size-14 text-accent" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Message envoyé</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Merci de nous avoir contactés. Notre équipe vous répondra dans les meilleurs délais.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">Prénom</Label>
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Téléphone (facultatif)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="subject">Sujet</Label>
        <Input id="subject" name="subject" required />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-1 size-4 accent-[var(--accent)]" />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à
          la politique de confidentialité.
        </span>
      </label>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Envoyer le message
      </Button>
    </form>
  )
}
