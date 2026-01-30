import type { Metadata } from "next"

import { getLocalMediaData } from "@/app/lib/local-media"
import { LocalEpisodeCard } from "@/app/components/local-episode-card"

export const metadata: Metadata = {
  title: "TV Shows",
  description: "Local TV library",
}

export default function TVShowsPage() {
  const media = getLocalMediaData()

  return (
    <section className="pb-16 pt-10">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <h1 className="text-3xl font-semibold text-neutral-100">Séries</h1>
        <p className="mt-2 text-sm text-neutral-400">
          {media.tvShows.length} série(s) détectée(s) dans votre dossier local.
        </p>
        <div className="mt-6 space-y-8">
          {media.tvShows.map((show) => (
            <div key={show.id} className="rounded-lg border border-neutral-800 p-4">
              <h2 className="text-xl font-semibold text-neutral-100">
                {show.title}
              </h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {show.episodes.map((episode) => (
                  <LocalEpisodeCard
                    key={`${show.id}-${episode.season}-${episode.episode}`}
                    showId={show.id}
                    episode={episode}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

