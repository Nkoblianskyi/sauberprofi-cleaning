"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function BeforeAfterSlider() {
  const results = [
    {
      id: 1,
      title: "Büroreinigung",
      description: "Komplette Reinigung von Büroräumen inklusive Möbel und Fenster",
      image: "/ea979bce7b0cadc07ed798dbe31060cf.jpg",
      achievements: ["100% Staubentfernung", "Desinfektion aller Oberflächen", "Fensterreinigung"],
    },
    {
      id: 2,
      title: "Teppichreinigung",
      description: "Professionelle Tiefenreinigung von Teppichen und Polstern",
      image: "/e955d5bd50b763d65efc51426dab0319.jpg",
      achievements: ["Fleckenentfernung", "Geruchsneutralisierung", "Faserschutz"],
    },
    {
      id: 3,
      title: "Haushaltsreinigung",
      description: "Gründliche Reinigung aller Wohnbereiche nach höchsten Standards",
      image: "/5767cfb40ec86d14e8004eca22c3677a.jpg",
      achievements: ["Küche & Bad", "Alle Oberflächen", "Fenster & Böden"],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Unsere <span className="text-primary">Ergebnisse</span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sehen Sie selbst, welche beeindruckenden Ergebnisse unsere professionelle Reinigung erzielt.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {results.map((result) => (
          <Card key={result.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img src={result.image || "/placeholder.svg"} alt={result.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{result.title}</h4>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{result.description}</p>

                <div className="space-y-2">
                  {result.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
