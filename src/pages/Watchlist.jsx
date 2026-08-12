import { Heart } from 'lucide-react'
import MovieCard from '../components/movie/MovieCard'
import useWatchlist from '../hooks/useWatchlist'
import { Link } from 'react-router-dom'

const Watchlist = () => {
  const { watchlist } = useWatchlist()

  return (
    <main className='min-h-screen bg-black px-4 pb-16 pt-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8'>
          <div className='flex items-center gap-3'>
            <Heart size={28} className='text-red-500' fill='currentColor' />
            <h1 className='text-3xl font-bold text-white'>My Watchlist</h1>
          </div>
          <p className='mt-2 text-gray-400'>
            {watchlist.length}{' '}
            {watchlist.length === 1 ? 'movie' : 'movies'} saved
          </p>
        </div>

        {watchlist.length === 0 ? (
          <div className='flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-950 px-6 text-center'>
            <Heart size={48} className='text-gray-600' />
            <h2 className='mt-5 text-xl font-semibold text-white'>Your watchlist is empty</h2>
            <p className='mt-2 max-w-md text-gray-500'>Movies you add to your watchlist will appear here.</p>
            <Link to='/movies' className='mt-6 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200'>Browse Movies</Link>
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {watchlist.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        )}
      </div>
    </main>
  )
}

export default Watchlist