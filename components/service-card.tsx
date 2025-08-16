import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Clock,
  Calendar,
  Building,
  Home,
  Sparkles,
  Factory,
  AppWindowIcon as Window,
  CarIcon as Carpet,
} from "lucide-react"
import Link from "next/link"
import type { Service } from "@/lib/mock-data"

const iconMap = {
  building: Building,
  home: Home,
  sparkles: Sparkles,
  factory: Factory,
  window: Window,
  carpet: Carpet,
}

const categoryColors = {
  buero: "bg-primary/10 text-primary border-primary/20",
  haushalt: "bg-secondary/10 text-secondary border-secondary/20",
  spezial: "bg-accent/10 text-accent border-accent/20",
  industrie: "bg-muted text-muted-foreground border-muted/20",
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Building

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-300 border-0 hover:scale-105 h-full ${
        index % 3 === 0
          ? "bg-gradient-to-br from-primary/5 to-primary/10"
          : index % 3 === 1
            ? "bg-gradient-to-br from-secondary/5 to-secondary/10"
            : "bg-gradient-to-br from-accent/5 to-accent/10"
      }`}
    >
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              index % 3 === 0
                ? "bg-primary text-primary-foreground"
                : index % 3 === 1
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-accent text-accent-foreground"
            }`}
          >
            <Icon className="h-8 w-8" />
          </div>

          <Badge className={categoryColors[service.category]}>
            {service.category === "buero" && "Büro"}
            {service.category === "haushalt" && "Haushalt"}
            {service.category === "spezial" && "Spezial"}
            {service.category === "industrie" && "Industrie"}
          </Badge>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">{service.shortDescription}</p>

        {/* Service Details */}
        <div className="space-y-3 mb-6">
          {service.duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Dauer: {service.duration}</span>
            </div>
          )}

          {service.frequency && service.frequency.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Verfügbar: {service.frequency.join(", ")}</span>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="space-y-2 mb-8 flex-1">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-accent"
                }`}
              ></div>
              <span>{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-sm text-muted-foreground">+{service.features.length - 3} weitere Leistungen</div>
          )}
        </div>

        <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Link href={`/services/${service.id}`}>
            Details ansehen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
