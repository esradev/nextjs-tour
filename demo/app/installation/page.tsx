import { PageHeader } from "@/components/page-header"
import { Terminal } from "lucide-react"

export default function InstallationPage() {
  return (
    <div>
      <PageHeader
        title="Installation"
        description="Get started with Next.js Tour in less than 5 minutes. Follow these simple steps to add professional tour experiences to your Next.js application."
      />

      <div className="space-y-8">
        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold text-foreground">Install the Package</h2>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Install nextjs-tour using your preferred package manager. The package works with npm, yarn, pnpm, or bun.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-mono">Terminal</span>
            </div>
            <div className="p-4 bg-background">
              <code className="text-sm text-primary font-mono">npm install nextjs-tour</code>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold text-foreground">Add TourProvider</h2>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Wrap your application with the TourProvider component. This is typically done in your root layout file.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <span className="text-sm text-muted-foreground font-mono">app/layout.tsx</span>
            </div>
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`import { TourProvider } from "nextjs-tour"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TourProvider>
          {children}
        </TourProvider>
      </body>
    </html>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold text-foreground">Create Your First Tour</h2>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Use the useTourContext hook to create and start tours in your components.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <span className="text-sm text-muted-foreground font-mono">components/my-component.tsx</span>
            </div>
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`"use client"

import { useTourContext } from "nextjs-tour"

const tourSteps = [
  {
    id: "welcome",
    target: ".welcome-section",
    title: "Welcome!",
    content: "Let's take a quick tour of our app!",
    position: "center"
  },
  {
    id: "feature",
    target: ".main-feature",
    title: "Main Feature",
    content: "This is our main feature.",
    position: "bottom"
  }
]

export function MyComponent() {
  const { startTour } = useTourContext()

  return (
    <button 
      onClick={() => startTour(tourSteps, "intro-tour")}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Start Tour
    </button>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-4">Next Steps</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary">→</span>
              <span className="text-muted-foreground">
                Check out the{" "}
                <a href="/examples" className="text-primary hover:underline">
                  live examples
                </a>{" "}
                to see different positioning options
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">→</span>
              <span className="text-muted-foreground">
                Read the{" "}
                <a href="/docs/api" className="text-primary hover:underline">
                  API reference
                </a>{" "}
                for complete documentation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">→</span>
              <span className="text-muted-foreground">
                Learn about{" "}
                <a href="/docs/customization" className="text-primary hover:underline">
                  customization options
                </a>{" "}
                for themes and styles
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
