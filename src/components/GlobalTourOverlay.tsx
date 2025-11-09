import { TourOverlay } from "./TourOverlay"
import { useTourContext } from "../contexts/TourContext"

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

  // Debug logging
  console.log("GlobalTourOverlay render:", {
    isActive,
    currentStep,
    totalSteps,
    currentStepData: getCurrentStep()
  })

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
