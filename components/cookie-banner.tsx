"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const STORAGE_KEY = "pcf-cookie-consent"

type Consent = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [customizing, setCustomizing] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, date: new Date().toISOString() }))
    } catch {
      // ignore storage errors
    }
    setVisible(false)
  }

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true })
  const refuseAll = () => save({ necessary: true, analytics: false, marketing: false })
  const saveChoices = () => save({ necessary: true, analytics, marketing })

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[60] p-4"
          role="dialog"
          aria-label="Consentement aux cookies"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent sm:flex">
                <Cookie className="size-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  Nous respectons votre vie privée
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
                  Vous pouvez accepter, refuser ou personnaliser vos choix. Consultez notre{" "}
                  <Link
                    href="/politique-de-confidentialite"
                    className="font-medium text-primary underline underline-offset-2 hover:text-accent"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>

                <AnimatePresence>
                  {customizing && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 rounded-lg bg-muted p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <Label className="text-sm font-medium">Cookies nécessaires</Label>
                            <p className="text-xs text-muted-foreground">Indispensables au fonctionnement du site.</p>
                          </div>
                          <Switch checked disabled aria-label="Cookies nécessaires (toujours actifs)" />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <Label htmlFor="analytics" className="text-sm font-medium">
                              Cookies de mesure d&apos;audience
                            </Label>
                            <p className="text-xs text-muted-foreground">Statistiques de fréquentation anonymes.</p>
                          </div>
                          <Switch id="analytics" checked={analytics} onCheckedChange={setAnalytics} />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <Label htmlFor="marketing" className="text-sm font-medium">
                              Cookies marketing
                            </Label>
                            <p className="text-xs text-muted-foreground">Contenus et annonces personnalisés.</p>
                          </div>
                          <Switch id="marketing" checked={marketing} onCheckedChange={setMarketing} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Button onClick={acceptAll} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Tout accepter
                  </Button>
                  <Button onClick={refuseAll} variant="outline">
                    Tout refuser
                  </Button>
                  {customizing ? (
                    <Button onClick={saveChoices} variant="secondary">
                      Enregistrer mes choix
                    </Button>
                  ) : (
                    <Button onClick={() => setCustomizing(true)} variant="ghost">
                      Personnaliser
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
