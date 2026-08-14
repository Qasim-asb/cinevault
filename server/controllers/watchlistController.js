import { Watchlist } from '../models/watchlistModel.js'

export const getWatchlist = async (req, res, next) => {
  try {
    const watchlist = await Watchlist.findOne({ user: req.user._id })

    res.status(200).json({
      success: true,
      data: watchlist?.movies || []
    })
  } catch (error) {
    next(error)
  }
}

export const addToWatchlist = async (req, res, next) => {
  try {
    const movie = req.body

    if (!movie.id || !movie.title) {
      return res.status(400).json({
        success: false,
        message: 'Movie id and title are required'
      })
    }

    let watchlist = await Watchlist.findOne({ user: req.user._id })

    if (!watchlist) {
      watchlist = await Watchlist.create({
        user: req.user._id,
        movies: [movie]
      })
    } else {
      const alreadyExists = watchlist.movies.some(item => item.id === movie.id)

      if (alreadyExists) {
        return res.status(409).json({
          success: false,
          message: 'Movie already in watchlist'
        })
      }

      watchlist.movies.push(movie)
      await watchlist.save()
    }

    res.status(201).json({
      success: true,
      data: watchlist.movies
    })
  } catch (error) {
    next(error)
  }
}

export const removeFromWatchlist = async (req, res, next) => {
  try {
    const movieId = Number(req.params.movieId)

    if (Number.isNaN(movieId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid movie id'
      })
    }

    const watchlist = await Watchlist.findOne({ user: req.user._id })

    if (!watchlist) {
      return res.status(404).json({
        success: false,
        message: 'Watchlist not found'
      })
    }

    const movieExists = watchlist.movies.some(movie => movie.id === movieId)

    if (!movieExists) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found in watchlist'
      })
    }

    watchlist.movies = watchlist.movies.filter(movie => movie.id !== movieId)

    await watchlist.save()

    res.status(200).json({
      success: true,
      data: watchlist.movies
    })
  } catch (error) {
    next(error)
  }
}