import { PageHeader } from "@/components/page-header"

export default function APIReferencePage() {
  return (
    <div>
      <PageHeader
        title="API Reference"
        description="Complete API documentation for Next.js Tour components, hooks, and type definitions."
      />

      <div className="space-y-12">
        {/* TourProvider */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">TourProvider</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The root provider component that manages tour state and configuration. Wrap your application with this
            component.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`<TourProvider
  theme={customTheme}
  lottieUrl="celebration.json"
>
  {children}
</TourProvider>`}</code>
              </pre>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Props</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <code className="text-primary">theme?</code>
                  <span className="text-muted-foreground">Custom theme object for styling</span>
                </li>
                <li className="flex gap-3">
                  <code className="text-primary">lottieUrl?</code>
                  <span className="text-muted-foreground">URL to Lottie animation for celebrations</span>
                </li>
                <li className="flex gap-3">
                  <code className="text-primary">children</code>
                  <span className="text-muted-foreground">React children to wrap</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* useTourContext */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">useTourContext</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Primary hook for accessing tour functionality. Use this to start tours, check tour status, and control
            playback.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`const {
  startTour,
  isActive,
  currentStep,
  nextStep,
  previousStep,
  skipTour,
  completeTour
} = useTourContext()`}</code>
              </pre>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Return Values</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <code className="text-primary">startTour(steps, tourId)</code>
                  <p className="text-muted-foreground mt-1">Function to start a new tour with the given steps</p>
                </li>
                <li>
                  <code className="text-primary">isActive: boolean</code>
                  <p className="text-muted-foreground mt-1">Whether a tour is currently active</p>
                </li>
                <li>
                  <code className="text-primary">currentStep: number</code>
                  <p className="text-muted-foreground mt-1">Index of the current step (0-based)</p>
                </li>
                <li>
                  <code className="text-primary">nextStep()</code>
                  <p className="text-muted-foreground mt-1">Move to the next step in the tour</p>
                </li>
                <li>
                  <code className="text-primary">previousStep()</code>
                  <p className="text-muted-foreground mt-1">Move to the previous step in the tour</p>
                </li>
                <li>
                  <code className="text-primary">skipTour()</code>
                  <p className="text-muted-foreground mt-1">Skip the current tour</p>
                </li>
                <li>
                  <code className="text-primary">completeTour()</code>
                  <p className="text-muted-foreground mt-1">Mark the tour as completed</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TourStep Type */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">TourStep</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            TypeScript interface defining the structure of a tour step.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`interface TourStep {
  id: string
  target: string
  title: string
  content: string
  position?: Position
  showPrevious?: boolean
  showSkip?: boolean
  onNext?: () => void
  onPrevious?: () => void
  onComplete?: () => void
}`}</code>
              </pre>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Properties</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <code className="text-primary">id: string</code>
                  <p className="text-muted-foreground mt-1">Unique identifier for the step</p>
                </li>
                <li>
                  <code className="text-primary">target: string</code>
                  <p className="text-muted-foreground mt-1">CSS selector for the target element</p>
                </li>
                <li>
                  <code className="text-primary">title: string</code>
                  <p className="text-muted-foreground mt-1">Step title displayed in the tooltip</p>
                </li>
                <li>
                  <code className="text-primary">content: string</code>
                  <p className="text-muted-foreground mt-1">Step description or instructions</p>
                </li>
                <li>
                  <code className="text-primary">position?: Position</code>
                  <p className="text-muted-foreground mt-1">Tooltip position relative to target (default: "bottom")</p>
                </li>
                <li>
                  <code className="text-primary">showPrevious?: boolean</code>
                  <p className="text-muted-foreground mt-1">Show the previous button (default: true)</p>
                </li>
                <li>
                  <code className="text-primary">showSkip?: boolean</code>
                  <p className="text-muted-foreground mt-1">Show the skip button (default: true)</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-4">Additional Resources</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/esradev/nextjs-tour/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Full README on GitHub →
              </a>
            </li>
            <li>
              <a
                href="https://github.com/esradev/nextjs-tour/tree/main/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Code Examples →
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/nextjs-tour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NPM Package →
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
