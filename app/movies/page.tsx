import type { Metadata } from "next"

import { getLocalMediaData } from "@/app/lib/local-media"
import { LocalMovieCard } from "@/app/components/local-movie-card"

export const metadata: Metadata = {
  title: "Movies",
  description: "Local movie library",
}

export default function MoviesPage() {
  const media = getLocalMediaData()

  return (
    <section className="pb-16 pt-10">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <h1 className="text-3xl font-semibold text-neutral-100">Films</h1>
        <p className="mt-2 text-sm text-neutral-400">
          {media.movies.length} film(s) détecté(s) dans votre dossier local.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {media.movies.map((movie) => (
            <LocalMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  )
}

