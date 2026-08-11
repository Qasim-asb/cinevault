import { Play, Plus, Star } from 'lucide-react'
import MovieRow from '../components/movie/MovieRow'
import { movies } from '../data/movies'

const Home = () => {

  return (
    <main>
      <section className='relative flex min-h-screen items-end overflow-hidden'>
        <img src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' alt='Cinema' className='absolute inset-0 h-full w-full object-cover' />

        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8'>
          <div className='max-w-2xl'>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500'>Featured Movie</p>
            <h1 className='text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl'>The Dark Knight</h1>
            <div className='mt-5 flex items-center gap-4 text-sm text-gray-300'>
              <span className='flex items-center gap-1 text-yellow-400'>
                <Star size={16} fill='currentColor' /> 9.0
              </span>
              <span>2008</span>
              <span>2h 32m</span>
              <span>Action</span>
              <span>Crime</span>
            </div>
            <p className='mt-6 max-w-xl leading-7 text-gray-300'>When a threat known as the Joker emerges from his mysterious past, Batman must face one of the greatest challenges of his career.</p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <button className='flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200'>
                <Play size={18} fill='currentColor' /> Watch Trailer
              </button>
              <button className='flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20'>
                <Plus size={18} /> Watchlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8'>
        <MovieRow title='Trending Now' movies={movies} />
        <MovieRow title='Popular Movies' movies={movies.slice().reverse()} />
      </section>
    </main>
  )
}

export default Home