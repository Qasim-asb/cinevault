import { useEffect } from 'react'

const TrailerModal = ({ isOpen, onClose, title, trailerId }) => {
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div onClick={onClose} role='dialog' aria-modal='true' aria-labelledby='trailer-title' className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm'>
      <div onClick={e => e.stopPropagation()} className='relative w-full max-w-4xl rounded-2xl bg-zinc-900 p-6'>
        <button onClick={onClose} aria-label='Close trailer' className='absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-gray-300 transition hover:bg-black hover:text-white'>×</button>

        <h2 id='trailer-title' className='pr-10 text-2xl font-bold text-white'>{title} — Trailer</h2>

        <div className='mt-6 aspect-video overflow-hidden rounded-xl bg-black'>
          {trailerId ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailerId}`}
              title={`${title} trailer`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='h-full w-full'
            />
          ) : (
            <div className='flex h-full items-center justify-center'>
              <p className='text-gray-500'>Trailer unavailable.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrailerModal