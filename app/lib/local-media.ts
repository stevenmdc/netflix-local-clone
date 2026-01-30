import mediaData from "@/app/data/media.json"

export type LocalMovie = {
  id: string
  title: string
  year: number | null
  videoUrl: string
  thumbnail?: string | null
  backdrop?: string | null
}

export type LocalTvEpisode = {
  season: number
  episode: number
  title: string
  videoUrl: string
}

export type LocalTvShow = {
  id: string
  title: string
  poster?: string | null
  episodes: LocalTvEpisode[]
}

export type LocalMediaData = {
  movies: LocalMovie[]
  tvShows: LocalTvShow[]
}

export function getLocalMediaData(): LocalMediaData {
  return mediaData as LocalMediaData
}

export function findMovieById(id: string): LocalMovie | undefined {
  return mediaData.movies.find((movie) => movie.id === id)
}

export function findEpisode(
  showId: string,
  season: number,
  episode: number
): LocalTvEpisode | undefined {
  const show = mediaData.tvShows.find((entry) => entry.id === showId)
  return show?.episodes.find(
    (item) => item.season === season && item.episode === episode
  )
}

