import MovieRow from '../components/movie/MovieRow'
import useMovies from '../hooks/useMovies'

const Movies = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useMovies()

  const movies = data?.pages.flatMap(page => page.movies) ?? []

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

        {hasNextPage && (
          <div className='mt-10 flex justify-center'>
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className='rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50'>
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Movies