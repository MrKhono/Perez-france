import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Perez Chapel France — Percer et Transformer les Générations",
    template: "%s · Perez Chapel France",
  },
  description:
    "Perez Chapel France est une église chrétienne située à Pantin, membre du réseau Perez Chapel International. Rejoignez-nous pour percer dans la prière et transformer les générations.",
  keywords: [
    "Perez Chapel France",
    "église Pantin",
    "église chrétienne",
    "culte Pantin",
    "Perez Chapel International",
    "prière",
    "évangélisation",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Perez Chapel France — Percer et Transformer les Générations",
    description:
      "Église chrétienne à Pantin, membre du réseau Perez Chapel International.",
    type: "website",
    locale: "fr_FR",
  },
}

export const viewport: Viewport = {
  themeColor: "#1b2a5b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`bg-background ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
