"use client"

import { useState } from "react"
import { CheckCircle2, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const PRESETS = [20, 50, 100, 200]
const FREQUENCIES = [
  { id: "once", label: "Ponctuel" },
  { id: "monthly", label: "Mensuel" },
]

export function DonationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [amount, setAmount] = useState<number | "">(50)
  const [frequency, setFrequency] = useState("once")

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="size-14 text-accent" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Merci pour votre don</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Votre générosité soutient la mission de l&apos;église. Vous allez recevoir un email de
          confirmation avec les instructions pour finaliser votre don.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Faire un autre don
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
      <fieldset>
        <legend className="text-sm font-semibold text-primary">Fréquence</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {FREQUENCIES.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFrequency(f.id)}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                frequency === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-primary">Montant (€)</legend>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(p)}
              className={cn(
                "rounded-xl border py-3 text-sm font-semibold transition-colors",
                amount === p
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-primary hover:border-accent/50",
              )}
            >
              {p} €
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Label htmlFor="customAmount">Autre montant</Label>
          <Input
            id="customAmount"
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            required
          />
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">Prénom</Label>
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-1 size-4 accent-[var(--accent)]" />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter mon don, conformément à la
          politique de confidentialité.
        </span>
      </label>

      <Button type="submit" size="lg" className="mt-6 w-full">
        <Heart className="size-4" />
        {frequency === "monthly" ? "Donner chaque mois" : "Faire mon don"}
        {amount !== "" ? ` · ${amount} €` : ""}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Paiement sécurisé. Un reçu fiscal vous sera adressé.
      </p>
    </form>
  )
}
