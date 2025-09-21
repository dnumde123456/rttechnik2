"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { XIcon, PlayIcon } from "lucide-react"

export default function WelcomeVideoOverlay() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const hasSeenVideo = localStorage.getItem("hasSeenWelcomeVideo")
    if (!hasSeenVideo) {
      setShowOverlay(true)
    }
  }, [])

  const handleSkip = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setShowOverlay(false)
    localStorage.setItem("hasSeenWelcomeVideo", "true")
  }, [])

  const handleVideoEnd = useCallback(() => {
    setVideoEnded(true)
    setShowOverlay(false)
    localStorage.setItem("hasSeenWelcomeVideo", "true")
  }, [])

  const handleRewatch = useCallback(() => {
    setVideoEnded(false)
    setShowOverlay(true)
    localStorage.removeItem("hasSeenWelcomeVideo")
  }, [])

  if (!showOverlay && !videoEnded) {
    return (
      <Button
        onClick={handleRewatch}
        className="fixed bottom-4 right-4 z-40 bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Rewatch Welcome Video"
      >
        <PlayIcon className="h-5 w-5 mr-2" /> Rewatch Welcome Video
      </Button>
    )
  }

  if (!showOverlay) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="https://rttechnik.com/wp-content/uploads/2025/07/WELCOME-TO-rttechnik.mp4"
        autoPlay
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
      />
      <Button
        onClick={handleSkip}
        className="absolute top-4 right-4 z-[10000] bg-white/20 text-white hover:bg-white/30 border border-white/30"
        aria-label="Skip Welcome Video"
      >
        <XIcon className="h-5 w-5 mr-2" /> Skip
      </Button>
    </div>
  )
}
