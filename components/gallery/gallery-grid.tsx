"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { GALLERY, GALLERY_ALBUMS } from "@/lib/site-data"

export function GalleryGrid() {
  const [album, setAlbum] = useState("Tous")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const photos = album === "Tous" ? GALLERY : GALLERY.filter((p) => p.album === album)

  const showPrev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  const showNext = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length))

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {GALLERY_ALBUMS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => setAlbum(a)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              album === a
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
            )}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-secondary"
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/30" />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Fermer"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Précédent"
          >
            <ChevronLeft className="size-8" />
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src || "/placeholder.svg"}
              alt={photos[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Suivant"
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </div>
  )
}
