import Link from "next/link"
import {
  ArrowRight,
  Zap,
  Palette,
  Code,
  Smartphone,
  Database,
  Target
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="mb-8">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full">
            v2.0 Now Available
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Beautiful Tour System
            <br />
            <span className="text-primary">for Next.js</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-3xl">
            Create engaging onboarding experiences with smooth animations,
            flexible positioning, and Lottie celebration effects. Fully
            customizable and TypeScript ready.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/installation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/examples"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-card-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Examples
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 p-6 bg-card border border-border rounded-lg">
          <div>
            <div className="text-3xl font-bold text-foreground">13+</div>
            <div className="text-sm text-muted-foreground">
              Position Options
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">100%</div>
            <div className="text-sm text-muted-foreground">TypeScript</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">0</div>
            <div className="text-sm text-muted-foreground">Dependencies</div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Why Choose Next.js Tour?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Smart Positioning",
              description:
                "13 intelligent positioning options with automatic overflow detection."
            },
            {
              icon: Zap,
              title: "Performance First",
              description:
                "Lightweight, zero dependencies, optimized for Next.js."
            },
            {
              icon: Palette,
              title: "Fully Customizable",
              description:
                "Custom themes, colors, animations, and Lottie effects."
            },
            {
              icon: Code,
              title: "TypeScript Ready",
              description:
                "Complete type definitions with IntelliSense support."
            },
            {
              icon: Smartphone,
              title: "Mobile Optimized",
              description: "Responsive design across all device sizes."
            },
            {
              icon: Database,
              title: "Smart Memory",
              description: "Automatic progress tracking with localStorage."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="p-8 bg-card border border-border rounded-lg">
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Start</h2>
        <p className="text-muted-foreground mb-6">
          Get started in less than 5 minutes.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <div className="p-4 bg-background rounded-lg border border-border">
                <code className="text-sm text-primary">
                  npm install nextjs-tour
                </code>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Add TourProvider to your layout
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Create your first tour
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/installation"
          className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium"
        >
          View full installation guide
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  )
}
