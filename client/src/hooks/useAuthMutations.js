import { useMutation } from '@tanstack/react-query'
import { login, signup } from '../services/authService'

export const useLogin = () => {
  return useMutation({
    mutationFn: login
  })
}

export const useSignup = () => {
  return useMutation({
    mutationFn: signup
  })
}