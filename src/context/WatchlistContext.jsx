import WatchlistContext from './WatchlistContext'
import useAuth from '../hooks/useAuth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addToWatchlist, getWatchlist, removeFromWatchlist } from '../services/watchlistService'

export const WatchlistProvider = ({ children }) => {
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const { data: watchlist = [], isLoading, isError } = useQuery({
    queryKey: ['watchlist'],
    queryFn: getWatchlist,
    enabled: Boolean(user),
    retry: false
  })

  const addMutation = useMutation({
    mutationFn: addToWatchlist,
    onSuccess: data => {
      queryClient.setQueryData(['watchlist'], data)
    }
  })

  const removeMutation = useMutation({
    mutationFn: removeFromWatchlist,
    onSuccess: data => {
      queryClient.setQueryData(['watchlist'], data)
    }
  })

  const toggleWatchlist = movie => {
    const alreadyAdded = watchlist.some(item => item.id === movie.id)

    if (alreadyAdded) {
      removeMutation.mutate(movie.id)
    } else {
      addMutation.mutate(movie)
    }
  }

  const isInWatchlist = movieId => {
    return watchlist.some(movie => movie.id === movieId)
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, isInWatchlist, isLoading, isError }}>
      {children}
    </WatchlistContext.Provider>
  )
}
