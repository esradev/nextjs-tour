import { PageHeader } from "@/components/page-header"

export default function CustomizationPage() {
  return (
    <div>
      <PageHeader
        title="Customization"
        description="Learn how to customize the appearance and behavior of Next.js Tour to match your brand and design system."
      />

      <div className="space-y-12">
        {/* Custom Theme */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Custom Theme</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Customize colors, spacing, and typography by providing a custom theme object to TourProvider.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`const customTheme = {
  colors: {
    primary: "#6366f1",
    background: "#ffffff",
    text: "#1f2937",
    border: "#e5e7eb"
  },
  spacing: {
    padding: "24px",
    borderRadius: "12px"
  },
  typography: {
    fontSize: "16px",
    fontFamily: "Inter, sans-serif"
  }
}

<TourProvider theme={customTheme}>
  {children}
</TourProvider>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Tailwind Styling */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Tailwind CSS Styling</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Next.js Tour components accept className props for Tailwind CSS customization.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`<TourProvider
  tooltipClassName="bg-gray-900 text-white shadow-2xl"
  buttonClassName="bg-blue-600 hover:bg-blue-700"
  overlayClassName="bg-black/60"
>
  {children}
</TourProvider>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Lottie Animations */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Lottie Celebration Animations</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Add celebratory animations when users complete a tour using Lottie files.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`<TourProvider
  lottieUrl="https://assets.example.com/celebration.json"
>
  {children}
</TourProvider>

// Or use a local file
<TourProvider
  lottieUrl="/animations/celebration.json"
>
  {children}
</TourProvider>`}</code>
              </pre>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Tip:</span> Find free Lottie animations at{" "}
              <a
                href="https://lottiefiles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LottieFiles.com
              </a>
            </p>
          </div>
        </section>

        {/* Custom Button Text */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Custom Button Text</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Customize button labels for different languages or to match your brand voice.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`<TourProvider
  buttonLabels={{
    next: "Continue",
    previous: "Go Back",
    skip: "Not Now",
    complete: "Get Started"
  }}
>
  {children}
</TourProvider>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Animation Settings */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Animation Settings</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Control animation duration, easing, and timing for smoother or faster transitions.
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 bg-background overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-muted-foreground">{`<TourProvider
  animationDuration={300} // milliseconds
  animationEasing="ease-in-out"
  scrollBehavior="smooth"
  scrollOffset={100} // pixels from top
>
  {children}
</TourProvider>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-6">Customization Examples</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Dark Mode Theme</h4>
              <div className="bg-background rounded-lg p-4 border border-border">
                <code className="text-sm text-muted-foreground font-mono">
                  colors: {`{ primary: "#818cf8", background: "#1f2937", text: "#f3f4f6" }`}
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Compact Style</h4>
              <div className="bg-background rounded-lg p-4 border border-border">
                <code className="text-sm text-muted-foreground font-mono">
                  spacing: {`{ padding: "12px", borderRadius: "6px" }`}
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Large Typography</h4>
              <div className="bg-background rounded-lg p-4 border border-border">
                <code className="text-sm text-muted-foreground font-mono">
                  typography: {`{ fontSize: "18px", lineHeight: "1.6" }`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
