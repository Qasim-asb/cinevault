import api from '../lib/axios'

export const getMovies = async (page = 1) => {
  const { data } = await api.get('/movies', { params: { page } })

  return data.data
}

export const getMovieById = async id => {
  const { data } = await api.get(`/movies/${id}`)

  return data.data
}

export const searchMovies = async (query, page = 1) => {
  const { data } = await api.get('/movies/search', { params: { query, page } })

  return data.data
}