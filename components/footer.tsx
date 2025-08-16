import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {companyInfo.name}
                
              </h3>
              <p className="text-background/80 leading-relaxed">{companyInfo.tagline}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div>{companyInfo.address.street}</div>
                  <div>
                    {companyInfo.address.postal} {companyInfo.address.city}
                  </div>
                  <div>{companyInfo.address.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dienstleistungen</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/bueroreinigung"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Büroreinigung
                </Link>
              </li>
              <li>
                <Link
                  href="/services/haushaltsreinigung"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Haushaltsreinigung
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fensterreinigung"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Fensterreinigung
                </Link>
              </li>
              <li>
                <Link
                  href="/services/grundreinigung"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Grundreinigung
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary hover:text-secondary transition-colors">
                  Alle Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-background/80 hover:text-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-background/80 hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-background/80 hover:text-primary transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/60">© 2025 {companyInfo.name}.online. Alle Rechte vorbehalten.</div>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-background/60 hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/cookies" className="text-background/60 hover:text-primary transition-colors">
              Cookies
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
