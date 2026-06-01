import { Hero } from "@/components/home/hero"
import { AboutPreview } from "@/components/home/about-preview"
import { Ministries } from "@/components/home/ministries"
import { EventsPreview } from "@/components/home/events-preview"
import { PastorWord } from "@/components/home/pastor-word"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { DonationBanner } from "@/components/home/donation-banner"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Ministries />
      <EventsPreview />
      <PastorWord />
      <GalleryPreview />
      <DonationBanner />
      <FinalCta />
    </>
  )
}
