"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter } from "lucide-react"
import { services } from "@/lib/mock-data"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", name: "Alle Services", count: services.length },
    { id: "buero", name: "Büroreinigung", count: services.filter((s) => s.category === "buero").length },
    { id: "haushalt", name: "Haushaltsreinigung", count: services.filter((s) => s.category === "haushalt").length },
    { id: "spezial", name: "Spezialreinigung", count: services.filter((s) => s.category === "spezial").length },
    { id: "industrie", name: "Industriereinigung", count: services.filter((s) => s.category === "industrie").length },
  ]

  const filteredServices =
    activeFilter === "all" ? services : services.filter((service) => service.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Unsere <span className="text-primary">Dienstleistungen</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Von der täglichen Büroreinigung bis zur intensiven Grundreinigung - wir bieten maßgeschneiderte
                Reinigungslösungen für jeden Bedarf. Entdecken Sie unser vollständiges Serviceangebot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Kostenloses Angebot anfordern
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  <Filter className="mr-2 h-5 w-5" />
                  Services filtern
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={category.id === activeFilter ? "default" : "outline"}
                  className={`${category.id === activeFilter ? "" : "bg-transparent"}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bereit für makellose Sauberkeit?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein kostenloses, unverbindliches Angebot. Unser Expertenteam berät Sie
              gerne.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
