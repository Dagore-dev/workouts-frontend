import { useState } from 'react'
import { API_URL } from '../config'
import useAuthContext from './useAuthContext'

export default function useSignup (): { error: string, isLoading: boolean, signup: (email: string, password: string) => void } {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [, authDispatch] = useAuthContext()

  function signup (email: string, password: string): void {
    setIsLoading(true)
    setError('')

    fetch(`${API_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        response.json()
          .then(data => {
            if (response.ok) {
              localStorage.setItem('user', JSON.stringify(data))
              authDispatch({ type: 'LOGIN', payload: data })
            } else {
              setError(data.error)
            }
          })
          .catch(error => {
            console.log(error)
            if (error instanceof Error) {
              setError(error.message)
            } else {
              setError(error)
            }
          })
      })
      .catch(error => {
        console.log(error)
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError(error)
        }
      })
      .finally(() => setIsLoading(false))
  }

  return {
    error,
    isLoading,
    signup
  }
}
