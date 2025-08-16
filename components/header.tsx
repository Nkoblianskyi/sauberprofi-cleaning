"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{companyInfo.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{companyInfo.contact.email}</span>
            </div>
          </div>
          <div className="text-xs">{companyInfo.contact.hours}</div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            {companyInfo.name}
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Startseite
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Dienstleistungen
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              Über uns
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Startseite
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Dienstleistungen
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                Über uns
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
              <Button asChild className="mt-4">
                <Link href="/contact">Kostenlos anfragen</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
