"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, CheckCircle, XCircle, Search } from "lucide-react"

export function ServiceAreaChecker() {
  const [postcode, setPostcode] = useState("")
  const [result, setResult] = useState<"available" | "unavailable" | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  // Mock service areas (German postal codes)
  const serviceAreas = [
    "10115",
    "10117",
    "10119",
    "10178",
    "10179", // Berlin
    "20095",
    "20097",
    "20099",
    "20144",
    "20146", // Hamburg
    "80331",
    "80333",
    "80335",
    "80336",
    "80337", // München
    "50667",
    "50668",
    "50670",
    "50672",
    "50674", // Köln
    "60311",
    "60313",
    "60314",
    "60316",
    "60318", // Frankfurt
    "70173",
    "70174",
    "70176",
    "70178",
    "70180", // Stuttgart
    "40210",
    "40211",
    "40212",
    "40213",
    "40215", // Düsseldorf
    "01067",
    "01069",
    "01097",
    "01099",
    "01109", // Dresden
  ]

  const handleCheck = async () => {
    if (!postcode.trim()) return

    setIsChecking(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const isAvailable = serviceAreas.some((area) => postcode.startsWith(area.substring(0, 3)))
    setResult(isAvailable ? "available" : "unavailable")
    setIsChecking(false)
  }

  const handleReset = () => {
    setPostcode("")
    setResult(null)
  }

  return (
    <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Servicegebiet prüfen</h3>
          <p className="text-muted-foreground">
            Geben Sie Ihre Postleitzahl ein, um zu prüfen, ob wir in Ihrer Region tätig sind.
          </p>
        </div>

        {!result ? (
          <div className="space-y-6">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Postleitzahl eingeben (z.B. 10115)"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="bg-background border-border focus:border-primary"
                maxLength={5}
              />
              <Button onClick={handleCheck} disabled={!postcode.trim() || isChecking} className="px-6">
                {isChecking ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">Wir sind in über 50 deutschen Städten aktiv</p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            {result === "available" ? (
              <div className="space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Perfekt! Wir sind in Ihrer Region tätig.</h4>
                  <p className="text-muted-foreground mb-6">
                    Postleitzahl {postcode} liegt in unserem Servicegebiet. Kontaktieren Sie uns für ein kostenloses
                    Angebot.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="/contact">Jetzt Angebot anfordern</a>
                    </Button>
                    <Button variant="outline" onClick={handleReset} className="bg-transparent">
                      Andere PLZ prüfen
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <XCircle className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Leider noch nicht in Ihrer Region</h4>
                  <p className="text-muted-foreground mb-6">
                    Postleitzahl {postcode} liegt derzeit außerhalb unseres Servicegebiets. Wir erweitern unser Angebot
                    kontinuierlich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="/contact">Trotzdem anfragen</a>
                    </Button>
                    <Button variant="outline" onClick={handleReset} className="bg-transparent">
                      Andere PLZ prüfen
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
