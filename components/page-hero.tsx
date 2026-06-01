import { ParallaxImage } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"

type PageHeroProps = {
  title: string
  subtitle?: string
  image: string
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex h-[42vh] min-h-[320px] items-center justify-center overflow-hidden">
      <ParallaxImage src={image} alt="" className="absolute inset-0" priority strength={60} />
      <div className="absolute inset-0 bg-primary/75" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-16 text-center text-white">
        <Reveal>
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-accent" />
        </Reveal>
      </div>
    </section>
  )
}
