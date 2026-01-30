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
