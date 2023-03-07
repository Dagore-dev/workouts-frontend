import { useEffect, useState } from 'react'
import { API_URL } from '../config'
import useAuthContext from './useAuthContext'
import useWorkoutsContext from './useWorkoutsContext'
import IWorkout from '../interfaces/IWorkout'

export default function useWorkouts (): { workouts: IWorkout[], isLoading: boolean } {
  const [state, dispatch] = useWorkoutsContext()
  const [{ user }] = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user != null) {
      setIsLoading(true)

      fetch(`${API_URL}/workouts`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
        .then(response => {
          response.json()
            .then(data => {
              if (response.ok) {
                return data
              } else {
                throw new Error('La petición ha fallado')
              }
            })
            .then(data => dispatch({ type: 'SET_WORKOUTS', payload: data.workouts }))
            .catch(console.log)
        })
        .catch(console.log)
        .finally(() => setIsLoading(prev => false))
    }
  }, [user])

  return { workouts: state.workouts, isLoading }
}
