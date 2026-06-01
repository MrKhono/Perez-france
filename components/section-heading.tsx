import { cn } from "@/lib/utils"
import { Reveal } from "@/components/animations/reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  variant?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = variant === "light"
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl",
          isLight ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-4 h-1 w-16 rounded-full bg-accent", align === "center" && "mx-auto")} />
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed",
            isLight ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
