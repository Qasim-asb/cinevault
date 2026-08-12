import { ArrowLeft, Check, Play, Plus, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { movies } from '../data/movies'
import useWatchlist from '../hooks/useWatchlist'

const MovieDetails = () => {
  const { id } = useParams()
  const movie = movies.find(movie => movie.id === Number(id))
  const { toggleWatchlist, isInWatchlist } = useWatchlist()

  if (!movie) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-black px-4 text-center'>
        <div>
          <h1 className='text-3xl font-bold text-white'>Movie not found</h1>
          <Link to='/movies' className='mt-6 inline-flex items-center gap-2 text-red-500 hover:text-red-400'>
            <ArrowLeft size={18} /> Back to movies
          </Link>
        </div>
      </main>
    )
  }

  const movieInWatchlist = isInWatchlist(movie.id)

  return (
    <main className='min-h-screen bg-black pt-16'>
      <section className='relative overflow-hidden'>
        <img src={movie.image} alt='' className='absolute inset-0 h-full w-full object-cover opacity-20 blur-sm' />

        <div className='absolute inset-0 bg-black/70' />

        <div className='relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <Link to='/movies' className='mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white'>
            <ArrowLeft size={18} /> Back to movies
          </Link>
          <div className='grid gap-10 md:grid-cols-[280px_1fr]'>
            <img src={movie.image} alt={movie.title} className='mx-auto w-full max-w-[280px] rounded-2xl shadow-2xl' />
            <div className='flex flex-col justify-center'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-red-500'>Movie</p>
              <h1 className='mt-3 text-4xl font-black text-white sm:text-5xl'>{movie.title}</h1>
              <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-300'>
                <span className='flex items-center gap-1 text-yellow-400'>
                  <Star size={16} fill='currentColor' /> {movie.rating.toFixed(1)}
                </span>
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
                {movie.genres.map(genre => <span key={genre}>{genre}</span>)}
              </div>
              <p className='mt-6 max-w-2xl leading-8 text-gray-300'>{movie.description}</p>
              <div className='mt-8 flex flex-wrap gap-3'>
                <button className='flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200'>
                  <Play size={18} fill='currentColor' /> Watch Trailer
                </button>
                <button onClick={() => toggleWatchlist(movie)} className='flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20'>
                  {movieInWatchlist ? <Check size={18} /> : <Plus size={18} />}
                  {movieInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MovieDetails