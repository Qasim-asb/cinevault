import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignup } from '../hooks/useAuthMutations'

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const navigate = useNavigate()
  const signupMutation = useSignup()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    signupMutation.mutate(formData, {
      onSuccess: () => { navigate('/login') }
    })
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-black px-4 pt-16'>
      <div className='w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8'>
        <h1 className='text-3xl font-bold text-white'>Create account</h1>
        <p className='mt-2 text-gray-400'>Join CineVault today.</p>

        <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
          <div>
            <label htmlFor='name' className='mb-2 block text-sm text-gray-300'>Name</label>
            <input id='name' name='name' type='text' value={formData.name} onChange={handleChange} required placeholder='Your name' className='w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-red-500' />
          </div>

          <div>
            <label htmlFor='email' className='mb-2 block text-sm text-gray-300'>Email</label>
            <input id='email' name='email' type='email' value={formData.email} onChange={handleChange} required placeholder='you@example.com' className='w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-red-500' />
          </div>

          <div>
            <label htmlFor='password' className='mb-2 block text-sm text-gray-300'>Password</label>
            <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} required minLength={6} placeholder='At least 6 characters' className='w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-red-500' />
          </div>

          {signupMutation.isError && (
            <p className='text-sm text-red-500'>
              {signupMutation.error?.response?.data?.message || 'Signup failed'}
            </p>
          )}

          <button type='submit' disabled={signupMutation.isPending} className='w-full rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50'>
            {signupMutation.isPending ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-gray-500'>
          Already have an account?{' '}
          <Link to='/login' className='text-white hover:text-red-500'>Login</Link>
        </p>
      </div>
    </main>
  )
}

export default Signup