import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useAuthMutations'
import useAuth from '../hooks/useAuth'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const navigate = useNavigate()
  const loginMutation = useLogin()
  const { login } = useAuth()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    loginMutation.mutate(formData, {
      onSuccess: data => {
        login(data)
        navigate('/')
      }
    })
  }

  return (
    <main className='flex min-h-screen items-center justify-center bg-black px-4 pt-16'>
      <div className='w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8'>
        <h1 className='text-3xl font-bold text-white'>Welcome back</h1>
        <p className='mt-2 text-gray-400'>Login to your CineVault account.</p>

        <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm text-gray-300'>Email</label>
            <input id='email' name='email' type='email' value={formData.email} onChange={handleChange} required placeholder='you@example.com' className='w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-red-500' />
          </div>

          <div>
            <label htmlFor='password' className='mb-2 block text-sm text-gray-300'>Password</label>
            <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} required placeholder='••••••••' className='w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-red-500' />
          </div>

          {loginMutation.isError && (
            <p className='text-sm text-red-500'>
              {loginMutation.error?.response?.data?.message || 'Login failed'}
            </p>
          )}

          <button type='submit' disabled={loginMutation.isPending} className='w-full rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50'>
            {loginMutation.isPending ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-gray-500'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-white hover:text-red-500'>Sign up</Link>
        </p>
      </div>
    </main>
  )
}

export default Login