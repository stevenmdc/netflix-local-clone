import { notFound } from "next/navigation"

import { VideoPlayer } from "@/app/components/video-player"
import { findEpisode } from "@/app/lib/local-media"

interface WatchEpisodePageProps {
  params: Promise<{ showId: string; season: string; episode: string }>
}

export default async function WatchEpisodePage({ params }: WatchEpisodePageProps) {
  const { showId, season, episode } = await params
  const seasonNumber = parseInt(season, 10)
  const episodeNumber = parseInt(episode, 10)

  const foundEpisode = findEpisode(showId, seasonNumber, episodeNumber)

  if (!foundEpisode) {
    notFound()
  }

  return (
    <div className="h-screen bg-black">
      <VideoPlayer src={foundEpisode.videoUrl} />
    </div>
  )
}
