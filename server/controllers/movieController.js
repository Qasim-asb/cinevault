import { getMovieById, getPopularMovies, searchMovies } from '../services/tmdbService.js'

export const getMovies = async (req, res, next) => {
  try {
    const movies = await getPopularMovies()

    res.status(200).json({
      success: true,
      data: movies
    })
  } catch (error) {
    next(error)
  }
}

export const getMovie = async (req, res, next) => {
  try {
    const movie = await getMovieById(req.params.id)

    res.status(200).json({
      success: true,
      data: movie
    })
  } catch (error) {
    next(error)
  }
}

export const searchMovieResults = async (req, res, next) => {
  try {
    const { query } = req.query

    if (!query?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      })
    }

    const movies = await searchMovies(query.trim())

    res.status(200).json({
      success: true,
      data: movies
    })
  } catch (error) {
    next(error)
  }
}