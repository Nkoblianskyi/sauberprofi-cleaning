import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import { tips } from "@/lib/mock-data"

export function Tips() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Nützliche <span className="text-primary">Reinigungstipps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionelle Tipps von unseren Experten für die optimale Pflege Ihrer Räume.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <Card
              key={tip.id}
              className={`group hover:shadow-xl transition-all duration-300 border-0 ${
                index % 4 === 0
                  ? "bg-gradient-to-br from-primary/5 to-primary/10"
                  : index % 4 === 1
                    ? "bg-gradient-to-br from-secondary/5 to-secondary/10"
                    : index % 4 === 2
                      ? "bg-gradient-to-br from-accent/5 to-accent/10"
                      : "bg-gradient-to-br from-muted/50 to-card"
              } hover:scale-105`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      index % 4 === 0
                        ? "bg-primary/20 text-primary"
                        : index % 4 === 1
                          ? "bg-secondary/20 text-secondary"
                          : index % 4 === 2
                            ? "bg-accent/20 text-accent"
                            : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tip.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {tip.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{tip.title}</h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tip.content.substring(0, 120)}...</p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors p-0 h-auto"
                >
                  Weiterlesen
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
