"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, PlayCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxImage } from "@/components/animations/parallax"
import { CHURCH } from "@/lib/site-data"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ParallaxImage src="/img/hero.jpg" alt="Culte de célébration à Perez Chapel France" className="absolute inset-0" priority strength={100} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 text-center text-white sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          {CHURCH.network} — France
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Percer et Transformer <span className="text-accent">les Générations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Une église pentecôtiste et charismatique au cœur de Pantin, dédiée au bien-être
          spirituel, physique, économique et émotionnel de chacun. Rejoignez notre famille.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="w-full bg-accent text-primary hover:bg-accent/90 sm:w-auto">
            <Link href="/devenir-membre">
              <Heart className="size-5" />
              Nous rejoindre
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-primary sm:w-auto"
          >
            <Link href="/sermons">
              <PlayCircle className="size-5" />
              Voir les sermons
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Number.POSITIVE_INFINITY, duration: 2 } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <ChevronDown className="size-7" />
      </motion.div>
    </section>
  )
}
