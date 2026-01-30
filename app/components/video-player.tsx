"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

type VideoJsPlayer = ReturnType<typeof videojs>

interface VideoPlayerProps {
  src: string
  poster?: string
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<VideoJsPlayer | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!videoRef.current) return

    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: "metadata",
      poster: poster,
      responsive: true,
      fluid: true,
      playbackRates: [0.5, 1, 1.25, 1.5, 2],
    })

    playerRef.current = player

    // Restore saved playback position
    const savedTime = localStorage.getItem(`video:${src}:time`)
    if (savedTime) {
      player.currentTime(parseFloat(savedTime))
    }

    // Save playback position on timeupdate
    const handleTimeUpdate = () => {
      if (playerRef.current !== null) {
        localStorage.setItem(`video:${src}:time`, String(playerRef.current.currentTime()))
      }
    }
    player.on("timeupdate", handleTimeUpdate)

    return () => {
      player.off("timeupdate", handleTimeUpdate)
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = null
      }
    }
  }, [src, poster])

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="relative h-full w-full bg-black">
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin vjs-big-play-centered"
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace(/\.(mp4|mkv)$/i, ".webm")} type="video/webm" />
          <p className="vjs-no-js">
            Votre navigateur ne supporte pas la vidéo HTML5.
          </p>
        </video>
      </div>

      {/* Bouton retour en haut à gauche */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
        aria-label="Retour"
      >
        <ChevronLeft size={24} />
      </button>
    </div>
  )
}
