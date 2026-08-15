import { useInfiniteQuery } from '@tanstack/react-query'
import { getMovies } from '../services/movieService'

const useMovies = () => {
  return useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam }) => getMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1
      }
      return undefined
    }
  })
}

export default useMovies