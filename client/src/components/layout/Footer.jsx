import { Film } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-zinc-950'>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <Link to='/' className='flex items-center gap-2'>
              <Film className='text-red-500' size={24} />
              <span className='text-lg font-bold text-white'>
                Cine<span className='text-red-500'>Vault</span>
              </span>
            </Link>

            <p className='mt-3 max-w-md text-sm leading-6 text-gray-500'>Discover movies, explore trailers, and build your personal watchlist.</p>
          </div>

          <nav className='flex flex-wrap gap-x-6 gap-y-3 text-sm'>
            <Link to='/' className='text-gray-400 transition hover:text-white'>Home</Link>
            <Link to='/movies' className='text-gray-400 transition hover:text-white'>Movies</Link>
            <Link to='/watchlist' className='text-gray-400 transition hover:text-white'>Watchlist</Link>
            <Link to='/search' className='text-gray-400 transition hover:text-white'>Search</Link>
          </nav>
        </div>

        <div className='mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-600'>
          © {new Date().getFullYear()} CineVault. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
