import Link from "next/link"
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"
import { CHURCH, NAV_LINKS } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-white/70">
              Église pentecôtiste et charismatique, branche française du réseau {CHURCH.network}.
            </p>
            <p className="font-serif text-accent">{CHURCH.slogan}</p>
            <div className="flex gap-3 pt-2">
              <a
                href={CHURCH.social.facebook}
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-primary"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={CHURCH.social.instagram}
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-primary"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={CHURCH.social.youtube}
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-primary"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-white">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faire-un-don" className="transition-colors hover:text-accent">
                  Faire un don
                </Link>
              </li>
              <li>
                <Link href="/devenir-membre" className="transition-colors hover:text-accent">
                  Devenir membre
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="transition-colors hover:text-accent">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="transition-colors hover:text-accent">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-accent" />
                <span>{CHURCH.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-5 shrink-0 text-accent" />
                <a href={`mailto:${CHURCH.email}`} className="transition-colors hover:text-accent">
                  {CHURCH.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 shrink-0 text-accent" />
                <span>{CHURCH.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {CHURCH.name}. Tous droits réservés.
          </p>
          <p>Percer et Transformer les Générations.</p>
        </div>
      </div>
    </footer>
  )
}
