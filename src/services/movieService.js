import api from '../lib/axios'

export const getMovies = async () => {
  const { data } = await api.get('/movies')

  return data.data ?? []
}

export const getMovieById = async id => {
  const { data } = await api.get(`/movies/${id}`)

  return data.data
}

export const searchMovies = async query => {
  const { data } = await api.get('/movies/search', { params: { query } })

  return data.data ?? []
}