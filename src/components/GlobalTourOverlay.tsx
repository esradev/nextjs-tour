"use client"

import { TourOverlay } from "./TourOverlay"
import { useTourContext } from "../contexts/TourContext"

interface GlobalTourOverlayProps {
  lottieAnimationUrl?: string
  className?: string
}

export function GlobalTourOverlay({
  lottieAnimationUrl,
  className
}: GlobalTourOverlayProps) {
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
    completeTour
  } = useTourContext()

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
