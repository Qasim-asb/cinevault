import axios from 'axios'
import process from 'node:process'

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
})

const getApiConfig = () => ({
  params: { api_key: process.env.TMDB_API_KEY },
})

export const getPopularMovies = async () => {
  const [moviesResponse, genresResponse] = await Promise.all([
    tmdbApi.get('/movie/popular', getApiConfig()),
    tmdbApi.get('/genre/movie/list', getApiConfig()),
  ])

  const genreMap = Object.fromEntries(
    genresResponse.data.genres.map(genre => [genre.id, genre.name]),
  )

  return moviesResponse.data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date?.slice(0, 4) || null,
    rating: movie.vote_average,
    genres: movie.genre_ids.map(id => genreMap[id]).filter(Boolean),
    image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    description: movie.overview,
  }))
}

export const getMovieById = async id => {
  const response = await tmdbApi.get(`/movie/${id}`, {
    params: {
      ...getApiConfig().params,
      append_to_response: 'videos'
    }
  })

  const movie = response.data

  const trailer = movie.videos?.results?.find(
    video => video.site === 'YouTube' && video.type === 'Trailer',
  )

  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date?.slice(0, 4) || null,
    rating: movie.vote_average,
    duration: movie.runtime,
    genres: movie.genres?.map(genre => genre.name) || [],
    image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : null,
    description: movie.overview,
    trailerId: trailer?.key || null,
  }
}

export const searchMovies = async query => {
  const response = await tmdbApi.get('/search/movie', {
    params: {
      ...getApiConfig().params,
      query,
    },
  })

  return response.data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date?.slice(0, 4) || null,
    rating: movie.vote_average,
    genres: [],
    image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    description: movie.overview,
  }))
}