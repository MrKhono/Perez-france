import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Stagger, StaggerItem } from "@/components/animations/reveal"
import { GALLERY } from "@/lib/site-data"

export function GalleryPreview() {
  const photos = GALLERY.slice(0, 6)

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title="Des moments de vie partagés"
          description="Quelques instants capturés au cœur de notre communauté."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <StaggerItem key={photo.id}>
              <div className="group relative aspect-square overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/30" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/galerie">
              Voir toute la galerie
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
