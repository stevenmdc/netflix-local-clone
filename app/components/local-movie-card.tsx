import Image from "next/image"
import Link from "next/link"

import type { LocalMovie } from "@/app/lib/local-media"

interface LocalMovieCardProps {
  movie: LocalMovie
}

export function LocalMovieCard({ movie }: LocalMovieCardProps) {
  return (
    <Link href={`/watch/movie/${movie.id}`} className="group block">
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-md bg-neutral-800">
        {movie.thumbnail ? (
          <Image
            src={movie.thumbnail}
            alt={movie.title}
            fill
            sizes="(min-width: 1280px) 12vw, (min-width: 768px) 18vw, 40vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-3 text-center text-sm text-neutral-200">
            {movie.title}
          </div>
        )}
      </div>
      <div className="mt-2 text-sm font-semibold text-neutral-100">
        {movie.title}
      </div>
      {movie.year ? (
        <div className="text-xs text-neutral-400">{movie.year}</div>
      ) : null}
    </Link>
  )
}
