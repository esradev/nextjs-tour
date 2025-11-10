import { PageHeader } from "@/components/page-header"

export default function PositionsPage() {
  const positions = [
    {
      name: "top",
      description: "Positions the tooltip above the target element, centered horizontally.",
      bestFor: "Elements near the bottom of the viewport or when you want to draw attention upward.",
    },
    {
      name: "bottom",
      description: "Positions the tooltip below the target element, centered horizontally.",
      bestFor: "Header elements, navigation items, or top-positioned controls.",
    },
    {
      name: "left",
      description: "Positions the tooltip to the left of the target element, centered vertically.",
      bestFor: "Elements on the right side of the screen or in right-aligned layouts.",
    },
    {
      name: "right",
      description: "Positions the tooltip to the right of the target element, centered vertically.",
      bestFor: "Sidebar items, left-aligned navigation, or controls on the left side.",
    },
    {
      name: "center",
      description: "Positions the tooltip in the center of the viewport as a modal-style overlay.",
      bestFor: "Welcome messages, important announcements, or starting/ending tour steps.",
    },
    {
      name: "top-left",
      description: "Positions the tooltip above and to the left of the target element.",
      bestFor: "Fine-grained control when top-center doesn't align well.",
    },
    {
      name: "top-right",
      description: "Positions the tooltip above and to the right of the target element.",
      bestFor: "Action buttons or controls in the top-right area.",
    },
    {
      name: "bottom-left",
      description: "Positions the tooltip below and to the left of the target element.",
      bestFor: "Dropdown menus or left-aligned content near the top.",
    },
    {
      name: "bottom-right",
      description: "Positions the tooltip below and to the right of the target element.",
      bestFor: "User profile menus or right-aligned controls near the top.",
    },
    {
      name: "left-top",
      description: "Positions the tooltip to the left and aligned with the top of the target.",
      bestFor: "Tall elements where you want the tooltip near the top.",
    },
    {
      name: "left-bottom",
      description: "Positions the tooltip to the left and aligned with the bottom of the target.",
      bestFor: "Tall elements where you want the tooltip near the bottom.",
    },
    {
      name: "right-top",
      description: "Positions the tooltip to the right and aligned with the top of the target.",
      bestFor: "Sidebar items or vertical navigation near the top.",
    },
    {
      name: "right-bottom",
      description: "Positions the tooltip to the right and aligned with the bottom of the target.",
      bestFor: "Sidebar items or vertical navigation near the bottom.",
    },
    {
      name: "auto",
      description: "Automatically chooses the best position based on available viewport space.",
      bestFor: "Dynamic layouts or when you're unsure which position will work best.",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Position Guide"
        description="A comprehensive guide to all 14 positioning options available in Next.js Tour, including when and how to use each one effectively."
      />

      <div className="space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <code className="px-3 py-1 bg-primary/10 text-primary rounded font-mono text-sm">"{position.name}"</code>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed">{position.description}</p>
            <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Best for:</span> {position.bestFor}
              </p>
            </div>
          </div>
        ))}

        {/* Tips Section */}
        <section className="p-8 bg-card border border-border rounded-lg mt-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Positioning Tips</h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Use "auto" for dynamic content:</span> When you're
                unsure about the layout or working with responsive designs, "auto" will intelligently choose the best
                position.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Start with "center":</span> For welcome messages or
                important announcements, center positioning provides maximum visibility.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Consider reading direction:</span> For left-to-right
                languages, guide users from left to right through your interface.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Test on mobile:</span> Some positions work better on
                desktop than mobile. Always test your tours on different screen sizes.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
