"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MembershipForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="size-14 text-accent" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Demande reçue</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Merci pour votre démarche ! Un responsable de l&apos;église vous contactera prochainement
          pour la suite de votre intégration.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Soumettre une nouvelle demande
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
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="city">Ville</Label>
          <Input id="city" name="city" autoComplete="address-level2" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ministry">Ministère d&apos;intérêt</Label>
          <Select name="ministry">
            <SelectTrigger id="ministry">
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="etude-biblique">Étude biblique</SelectItem>
              <SelectItem value="evangelisation">Évangélisation</SelectItem>
              <SelectItem value="culturel">Culturel</SelectItem>
              <SelectItem value="chorale">Chorale</SelectItem>
              <SelectItem value="indecis">Je ne sais pas encore</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="motivation">Votre motivation (facultatif)</Label>
        <Textarea id="motivation" name="motivation" rows={4} />
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-1 size-4 accent-[var(--accent)]" />
        <span>
          J&apos;accepte que mes données soient collectées pour traiter ma demande d&apos;adhésion,
          conformément à la politique de confidentialité.
        </span>
      </label>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Envoyer ma demande
      </Button>
    </form>
  )
}
