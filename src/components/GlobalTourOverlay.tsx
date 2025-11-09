import { TourOverlay } from "./TourOverlay"
import { useTourContext } from "../contexts/TourContext"
import { useEffect } from "react"

interface GlobalTourOverlayProps {
  className?: string
}

export function GlobalTourOverlay({ className }: GlobalTourOverlayProps) {
  const {
    isActive,
    getCurrentStep,
    currentStep,
    totalSteps,
    isLastStep,
    isFirstStep,
    nextStep,
    previousStep,
    skipTour,
    completeTour,
    lottieAnimationUrl
  } = useTourContext()

  // Toggle debug badge in the demo layout when tour is active
  useEffect(() => {
    const el =
      typeof document !== "undefined"
        ? document.getElementById("tour-debug")
        : null
    if (!el) return
    el.style.display = isActive ? "block" : "none"
  }, [isActive])

  return (
    <TourOverlay
      isActive={isActive}
      currentStep={getCurrentStep()}
      stepNumber={currentStep}
      totalSteps={totalSteps}
      isLastStep={isLastStep}
      isFirstStep={isFirstStep}
      onNext={nextStep}
      onPrevious={previousStep}
      onSkip={skipTour}
      onComplete={completeTour}
      lottieAnimationUrl={lottieAnimationUrl}
      className={className}
    />
  )
}
