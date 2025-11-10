"use client"

import { PageHeader } from "@/components/page-header"

export default function AdvancedUsagePage() {
  return (
    <div>
      <PageHeader
        title="Advanced Usage"
        description="Learn advanced techniques for building complex tour experiences with conditional steps, custom hooks, and dynamic content."
      />

      <div className="space-y-12">
        {/* Conditional Steps */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Conditional Steps</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You can dynamically filter or modify tour steps based on user state, permissions, or other conditions.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`const getConditionalSteps = (user) => {
  const baseSteps = [
    { id: "welcome", target: ".hero", title: "Welcome!", ... }
  ]
  
  if (user.isAdmin) {
    baseSteps.push({
      id: "admin",
      target: ".admin-panel",
      title: "Admin Panel",
      content: "Access admin features here",
      position: "right"
    })
  }
  
  return baseSteps
}

// Usage
startTour(getConditionalSteps(user), "conditional-tour")`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Event Callbacks */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Event Callbacks</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Execute custom logic when users interact with tour steps using callback functions.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`const steps = [
  {
    id: "feature",
    target: ".feature",
    title: "New Feature",
    content: "Check out our new feature!",
    position: "bottom",
    onNext: () => {
      // Track analytics
      analytics.track("tour_step_completed", { step: "feature" })
    },
    onComplete: () => {
      // Save completion to database
      saveToDatabase({ tourCompleted: true })
    }
  }
]`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Multiple Tours */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Multiple Concurrent Tours</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You can have multiple tours in your application by giving each one a unique ID.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`// Main onboarding tour
startTour(onboardingSteps, "onboarding-tour")

// Feature-specific tour
startTour(featureSteps, "feature-tour")

// Each tour's completion is tracked independently
// in localStorage as "tour-completed-{tourId}"`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Programmatic Control */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Programmatic Tour Control</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Control tour progression programmatically based on user actions or external events.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`function SmartTour() {
  const { 
    startTour, 
    nextStep, 
    previousStep, 
    currentStep, 
    isActive 
  } = useTourContext()
  
  const handleFormSubmit = () => {
    if (isActive && currentStep === 2) {
      // Automatically advance tour when form is submitted
      nextStep()
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      {/* Form fields */}
    </form>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Dynamic Content */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Dynamic Target Elements</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Handle cases where target elements are dynamically rendered or loaded asynchronously.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`const waitForElement = async (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }
    
    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}

// Usage
await waitForElement(".dynamic-content")
startTour(steps, "dynamic-tour")`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-6">Best Practices</h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold text-xl">→</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Keep tours short</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aim for 3-7 steps maximum. Long tours have higher skip rates.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold text-xl">→</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Test across devices</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Always test your tours on mobile and tablet, not just desktop.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold text-xl">→</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Allow skipping</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Never force users to complete a tour. Always provide a skip option.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold text-xl">→</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Track analytics</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use event callbacks to track completion rates and identify problem steps.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
