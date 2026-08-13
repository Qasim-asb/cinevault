import MovieRow from '../components/movie/MovieRow'
import useMovies from '../hooks/useMovies'

const Movies = () => {
  const { data: movies = [], isLoading, isError } = useMovies()

  if (isLoading) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-black'>
        <p className='text-gray-400'>Loading movies...</p>
      </main>
    )
  }

  if (isError) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-black'>
        <p className='text-gray-400'>Unable to load movies.</p>
      </main>
    )
  }

  return (
    <main className='min-h-screen bg-black px-4 pb-16 pt-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10'>
          <h1 className='text-3xl font-bold text-white'>Movies</h1>
          <p className='mt-2 text-gray-400'>Explore movies you'll love.</p>
        </div>

        <MovieRow title='All Movies' movies={movies} showViewAll={false} />
      </div>
    </main>
  )
}

export default Movies