import Link from "next/link"

import type { LocalTvEpisode } from "@/lib/local-media"

interface LocalEpisodeCardProps {
  showId: string
  episode: LocalTvEpisode
}

export function LocalEpisodeCard({ showId, episode }: LocalEpisodeCardProps) {
  return (
    <Link
      href={`/watch/show/${showId}/s/${episode.season}/e/${episode.episode}`}
      className="flex flex-col gap-2 rounded-md border border-neutral-800 bg-neutral-900 p-4 transition hover:border-red-500"
    >
      <div className="text-sm font-semibold text-neutral-100">
        S{episode.season}E{episode.episode} — {episode.title}
      </div>
      <div className="text-xs text-neutral-400">
        Cliquer pour lancer l&apos;épisode
      </div>
    </Link>
  )
}
