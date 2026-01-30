import { notFound } from "next/navigation"

import { VideoPlayer } from "@/app/components/video-player"
import { findMovieById } from "@/app/lib/local-media"

interface WatchMoviePageProps {
  params: Promise<{ id: string }>
}

export default async function WatchMoviePage({ params }: WatchMoviePageProps) {
  const { id } = await params
  const movie = findMovieById(id)

  if (!movie) {
    notFound()
  }

  return (
    <div className="h-screen bg-black">
      <VideoPlayer src={movie.videoUrl} poster={movie.backdrop ?? movie.thumbnail ?? undefined} />
    </div>
  )
}
