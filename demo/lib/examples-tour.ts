import type { TourStep } from "nextjs-tour"

export const examplesTour: TourStep[] = [
  {
    id: "position-top",
    target: ".example-card-0",
    title: "Top Position",
    content:
      'This example demonstrates the "top" position where the tooltip appears above the element.',
    position: "top",
    showPrevious: false
  },
  {
    id: "position-right",
    target: ".example-card-3",
    title: "Right Position",
    content:
      'The "right" position places the tooltip to the right of the target element.',
    position: "right"
  },
  {
    id: "interactive-cta",
    target: "#interactive-demo-cta",
    title: "Interactive Demo",
    content:
      "Open the interactive demo to explore more live examples and behaviors.",
    position: "center",
    showNext: false
  }
]

export default examplesTour
