import { PageHeader } from "@/components/page-header"
import TourButton from "@/components/tour-button"
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Circle } from "lucide-react"

export default function ExamplesPage() {
  const examples = [
    {
      icon: ArrowUp,
      title: "Top",
      description: "Tooltip appears above the target element",
      position: "top"
    },
    {
      icon: ArrowDown,
      title: "Bottom",
      description: "Tooltip appears below the target element",
      position: "bottom"
    },
    {
      icon: ArrowLeft,
      title: "Left",
      description: "Tooltip appears to the left of the target",
      position: "left"
    },
    {
      icon: ArrowRight,
      title: "Right",
      description: "Tooltip appears to the right of the target",
      position: "right"
    },
    {
      icon: Circle,
      title: "Center",
      description: "Modal-style tooltip in the center of the screen",
      position: "center"
    },
    {
      icon: ArrowUp,
      title: "Top-Left",
      description: "Tooltip appears at the top-left corner",
      position: "top-left"
    },
    {
      icon: ArrowUp,
      title: "Top-Right",
      description: "Tooltip appears at the top-right corner",
      position: "top-right"
    },
    {
      icon: ArrowDown,
      title: "Bottom-Left",
      description: "Tooltip appears at the bottom-left corner",
      position: "bottom-left"
    },
    {
      icon: ArrowDown,
      title: "Bottom-Right",
      description: "Tooltip appears at the bottom-right corner",
      position: "bottom-right"
    }
  ]

  return (
    <div>
      <PageHeader
        title="Live Examples"
        description="Explore interactive examples showcasing different positioning options and use cases for Next.js Tour."
      />

      <div className="space-y-12">
        <div className="flex items-center justify-end">
          <TourButton />
        </div>
        {/* Position Examples */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Position Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <div
                key={index}
                className={`example-card-${index} p-6 bg-card border border-border rounded-lg transition-colors cursor-pointer`}
              >
                <example.icon className="w-8 h-8 text-primary mb-4  transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {example.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {example.description}
                </p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                  position: "{example.position}"
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Common Use Cases
          </h2>
          <div className="grid gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Welcome Tour
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Guide new users through your application's key features with a
                multi-step tour that highlights important UI elements.
              </p>
              <div className="p-4 bg-background rounded-lg border border-border">
                <code className="text-sm text-muted-foreground font-mono">
                  position: "center" → "bottom" → "right" → "top"
                </code>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Feature Announcement
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Highlight new features or updates to existing users with
                targeted, single-step tours.
              </p>
              <div className="p-4 bg-background rounded-lg border border-border">
                <code className="text-sm text-muted-foreground font-mono">
                  position: "bottom" with showPrevious: false
                </code>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Context Help
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Provide contextual help for complex forms or workflows by
                guiding users through each step.
              </p>
              <div className="p-4 bg-background rounded-lg border border-border">
                <code className="text-sm text-muted-foreground font-mono">
                  position: "right" for form fields, "top" for action buttons
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo CTA */}
        <section
          id="interactive-demo-cta"
          className="p-8 bg-primary/10 border border-primary/20 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to see it in action?
          </h3>
          <p className="text-muted-foreground mb-6">
            Check out the original demo page with interactive tour examples.
          </p>
          <a
            href="https://nextjs-tour.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Interactive Demo
          </a>
        </section>
      </div>
    </div>
  )
}
