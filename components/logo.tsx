import { cn } from "@/lib/utils"
import Image from "next/image";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string
  variant?: "dark" | "light"
}) {
  const isLight = variant === "light"
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
              src="/img/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-serif text-base font-semibold tracking-tight",
            isLight ? "text-primary-foreground" : "text-primary",
          )}
        >
          Perez Chapel
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-medium uppercase tracking-[0.18em]",
            isLight ? "text-accent" : "text-accent",
          )}
        >
          France
        </span>
      </span>
    </span>
  )
}
