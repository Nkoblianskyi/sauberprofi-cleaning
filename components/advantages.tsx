import { Card, CardContent } from "@/components/ui/card"
import { Award, BadgeIcon as Certificate, Leaf, Shield, Clock, ThumbsUp } from "lucide-react"
import { advantages } from "@/lib/mock-data"

const iconMap = {
  award: Award,
  certificate: Certificate,
  leaf: Leaf,
  shield: Shield,
  clock: Clock,
  "thumbs-up": ThumbsUp,
}

export function Advantages() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Warum <span className="text-primary">SauberProfi</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie die Vorteile, die uns zum führenden Reinigungsservice in Deutschland machen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon as keyof typeof iconMap] || Award

            return (
              <Card
                key={advantage.id}
                className={`group hover:shadow-xl transition-all duration-300 border-0 ${
                  index % 3 === 0
                    ? "bg-gradient-to-br from-primary/5 to-primary/10"
                    : index % 3 === 1
                      ? "bg-gradient-to-br from-secondary/5 to-secondary/10"
                      : "bg-gradient-to-br from-accent/5 to-accent/10"
                } hover:scale-105`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      index % 3 === 0
                        ? "bg-primary text-primary-foreground"
                        : index % 3 === 1
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">{advantage.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
