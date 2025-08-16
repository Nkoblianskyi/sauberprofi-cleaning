"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookie-Einstellungen</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Durch die Nutzung
                  unserer Website stimmen Sie der Verwendung von Cookies zu.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button size="sm" onClick={acceptCookies} className="flex-1">
                  Alle akzeptieren
                </Button>
                <Button variant="outline" size="sm" onClick={declineCookies} className="flex-1 bg-transparent">
                  Ablehnen
                </Button>
              </div>

              <div className="text-xs text-muted-foreground">
                <Link href="/cookies" className="underline hover:text-primary">
                  Cookie-Richtlinie
                </Link>
                {" • "}
                <Link href="/privacy" className="underline hover:text-primary">
                  Datenschutz
                </Link>
              </div>
            </div>

            <button onClick={declineCookies} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
