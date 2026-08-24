import { useState } from 'react'
import { Check, Play, Plus, Star } from 'lucide-react'
import MovieRow from '../components/movie/MovieRow'
import useWatchlist from '../hooks/useWatchlist'
import TrailerModal from '../components/movie/TrailerModal'
import useMovies from '../hooks/useMovies'

const Home = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const { data: movies = [], isLoading, isError } = useMovies()

  const { toggleWatchlist, isInWatchlist } = useWatchlist()

  if (isLoading) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-black'>
        <p className='text-gray-400'>Loading movies...</p>
      </main>
    )
  }

  if (isError || movies.length === 0) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-black'>
        <p className='text-gray-400'>Unable to load movies.</p>
      </main>
    )
  }

  const featuredMovie = movies[0]
  const movieInWatchlist = isInWatchlist(featuredMovie.id)

  return (
    <main>
      <section className='relative flex min-h-screen items-end overflow-hidden'>
        <img src={featuredMovie.image} alt={featuredMovie.title} className='absolute inset-0 h-full w-full object-cover' />

        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8'>
          <div className='max-w-2xl'>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500'>Featured Movie</p>
            <h1 className='text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl'>{featuredMovie.title}</h1>
            <div className='mt-5 flex items-center gap-4 text-sm text-gray-300'>
              <span className='flex items-center gap-1 text-yellow-400'>
                <Star size={16} fill='currentColor' /> {featuredMovie.rating.toFixed(1)}
              </span>
              <span>{featuredMovie.year}</span>
              <span>{featuredMovie.duration}</span>
              {featuredMovie.genres.map(genre => <span key={genre}>{genre}</span>)}
            </div>
            <p className='mt-6 max-w-xl leading-7 text-gray-300'>{featuredMovie.description}</p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <button onClick={() => setIsTrailerOpen(true)} className='flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200'>
                <Play size={18} fill='currentColor' /> Watch Trailer
              </button>
              <button onClick={() => toggleWatchlist(featuredMovie)} className='flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20'>
                {movieInWatchlist ? <Check size={18} /> : <Plus size={18} />}
                {movieInWatchlist ? 'In Watchlist' : 'Watchlist'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8'>
        <MovieRow title='Trending Now' movies={movies} />
        <MovieRow title='Popular Movies' movies={movies.slice().reverse()} />
      </section>

      <TrailerModal isOpen={isTrailerOpen} onClose={() => setIsTrailerOpen(false)} title={featuredMovie.title} trailerId={featuredMovie.trailerId} />
    </main>
  )
}

export default Home