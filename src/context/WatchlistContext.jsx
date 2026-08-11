import useLocalStorage from '../hooks/useLocalStorage'
import WatchlistContext from './WatchlistContext'

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useLocalStorage('cinevault-watchlist', [])

  const toggleWatchlist = movie => {
    setWatchlist(currentWatchlist => {
      const alreadyAdded = currentWatchlist.some(
        item => item.id === movie.id,
      )

      if (alreadyAdded) {
        return currentWatchlist.filter(
          item => item.id !== movie.id,
        )
      }

      return [...currentWatchlist, movie]
    })
  }

  const isInWatchlist = movieId => {
    return watchlist.some(movie => movie.id === movieId)
  }

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        toggleWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  )
}
