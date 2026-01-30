"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Play } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const savedTime = localStorage.getItem(`video:${src}:time`)
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime)
    }
  }, [src])

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem(
        `video:${src}:time`,
        videoRef.current.currentTime.toString()
      )
    }
  }

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        className="h-full w-full"
        controls
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace(/\.(mp4|mkv)$/i, ".webm")} type="video/webm" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Bouton retour en haut à gauche */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
        aria-label="Retour"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Bouton play au centre (visible quand vidéo pas en lecture) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <button
            onClick={handlePlay}
            className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-full transition-colors shadow-lg"
            aria-label="Lancer la vidéo"
          >
            <Play size={48} fill="currentColor" />
          </button>
        </div>
      )}
    </div>
  )
}
