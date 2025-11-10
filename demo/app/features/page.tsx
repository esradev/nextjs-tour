import { PageHeader } from "@/components/page-header"
import { Check } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      category: "Positioning",
      items: [
        "13 intelligent positioning options (top, bottom, left, right, center, and combinations)",
        "Automatic overflow detection and repositioning",
        "Responsive positioning that adapts to screen size",
        "Precise alignment control with offset options",
      ],
    },
    {
      category: "Customization",
      items: [
        "Custom themes and color schemes",
        "Tailwind CSS styling support",
        "Custom component rendering",
        "Lottie animation integration for celebrations",
        "Configurable button text and styles",
      ],
    },
    {
      category: "Developer Experience",
      items: [
        "Full TypeScript support with complete type definitions",
        "IntelliSense support in modern IDEs",
        "Comprehensive API documentation",
        "React hooks for advanced control",
        "Server and client component compatible",
      ],
    },
    {
      category: "Performance",
      items: [
        "Zero external dependencies",
        "Lightweight bundle size",
        "Optimized for Next.js App Router and Pages Router",
        "Lazy loading support",
        "Minimal re-renders with optimized state management",
      ],
    },
    {
      category: "User Experience",
      items: [
        "Smooth animations and transitions",
        "Keyboard navigation support (Arrow keys, Escape)",
        "Mobile-responsive design",
        "Touch-friendly controls",
        "Automatic progress saving with localStorage",
        "Skip and restart tour functionality",
      ],
    },
    {
      category: "Advanced Features",
      items: [
        "Multi-step tour flows",
        "Conditional step rendering",
        "Custom event callbacks (onStart, onComplete, onSkip)",
        "Programmatic tour control",
        "Tour state management hooks",
        "Multiple concurrent tours support",
      ],
    },
  ]

  return (
    <div>
      <PageHeader
        title="Features"
        description="Discover the comprehensive feature set that makes Next.js Tour the most powerful onboarding solution for Next.js applications."
      />

      <div className="space-y-12">
        {features.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
            <div className="grid gap-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-3 items-start p-4 bg-card border border-border rounded-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="p-8 bg-primary/10 border border-primary/20 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-4">Need a custom feature?</h3>
          <p className="text-muted-foreground mb-6">
            We're constantly improving Next.js Tour based on community feedback. If you need a specific feature, feel
            free to open an issue on GitHub.
          </p>
          <a
            href="https://github.com/esradev/nextjs-tour/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Request a Feature
          </a>
        </section>
      </div>
    </div>
  )
}
