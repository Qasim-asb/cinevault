import { useInfiniteQuery } from '@tanstack/react-query'
import { searchMovies } from '../services/movieService'

const useSearchMovies = query => {
  return useInfiniteQuery({
    queryKey: ['movies', 'search', query],
    queryFn: ({ pageParam }) => searchMovies(query, pageParam),
    initialPageParam: 1,
    enabled: Boolean(query.trim()),
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1
      }
      return undefined
    }
  })
}

export default useSearchMovies