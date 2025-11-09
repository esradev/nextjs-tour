export type PositionType =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "left-top"
  | "left-bottom"
  | "right"
  | "right-top"
  | "right-bottom"
  | "center"
  | "auto"

export interface TourStep {
  id: string
  target: string // CSS selector for the element to highlight
  title: string
  content: string
  position?: PositionType
  showNext?: boolean
  showPrevious?: boolean
  showSkip?: boolean
  action?: () => void // Optional action to perform when this step is shown
}

export interface UseTourOptions {
  tourKey: string // Unique key for this tour in localStorage
  steps: TourStep[]
  onTourComplete?: () => void
  onTourSkip?: () => void
  showCongratulations?: boolean // Whether to show congratulations on completion
}

export interface TourContextValue {
  isActive: boolean
  currentStep: number
  totalSteps: number
  isFirstStep: boolean
  isLastStep: boolean
  getCurrentStep: () => TourStep | null
  startTour: (steps: TourStep[], tourKey: string) => void
  nextStep: () => void
  previousStep: () => void
  skipTour: () => void
  completeTour: () => void
}

export interface TourOverlayProps {
  isActive: boolean
  currentStep: TourStep | null
  stepNumber: number
  totalSteps: number
  isLastStep: boolean
  isFirstStep: boolean
  onNext: () => void
  onPrevious: () => void
  onSkip: () => void
  onComplete: () => void
  className?: string
  lottieAnimationUrl?: string // Optional URL to Lottie animation JSON
}

export interface TourProviderProps {
  children: React.ReactNode
  lottieAnimationUrl?: string // Optional URL to Lottie animation JSON
  theme?: {
    primaryColor?: string
    backgroundColor?: string
    textColor?: string
    borderRadius?: string
    zIndex?: number
  }
}

export interface ElementPosition {
  top: number
  left: number
  width: number
  height: number
  centerX: number
  centerY: number
}
