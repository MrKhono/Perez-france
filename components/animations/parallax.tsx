"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  strength = 60,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  strength?: number
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", imageClassName)}
          sizes="100vw"
        />
      </motion.div>
    </div>
  )
}
