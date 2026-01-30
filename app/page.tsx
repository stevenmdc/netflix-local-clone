import Link from "next/link"

import { getLocalMediaData } from "@/app/lib/local-media"

export default function Home() {
  const media = getLocalMediaData()

  return (
    <section>
      <div className="container mx-auto max-w-screen-2xl px-4 pb-16 pt-10">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <h1 className="text-3xl font-semibold text-neutral-100">
            Netflix Local
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Bibliothèque locale détectée : {media.movies.length} films, {" "}
            {media.tvShows.length} séries.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/movies"
              className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Voir les films
            </Link>
            <Link
              href="/tv-shows"
              className="rounded-md border border-neutral-700 px-5 py-2 text-sm font-semibold text-neutral-100 transition hover:border-red-500"
            >
              Voir les séries
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

