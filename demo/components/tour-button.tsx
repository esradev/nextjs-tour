"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useTourContext } from "nextjs-tour"
import examplesTour from "@/lib/examples-tour"

export function TourButton() {
  const { startTour } = useTourContext()

  const handleStart = React.useCallback(() => {
    startTour(examplesTour, "examples-tour")
  }, [startTour])

  return (
    <Button
      onClick={handleStart}
      variant="ghost"
      size="default"
      className="bg-primary text-white"
    >
      Start Tour
    </Button>
  )
}

export default TourButton
