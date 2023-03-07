import useAuthContext from './useAuthContext'
import useWorkoutsContext from './useWorkoutsContext'

export default function useLogout (): { logout: () => void } {
  const [, authDispatch] = useAuthContext()
  const [, workoutsDispatch] = useWorkoutsContext()

  function logout (): void {
    localStorage.removeItem('user')
    authDispatch({ type: 'LOGOUT', payload: null })
    workoutsDispatch({ type: 'SET_WORKOUTS', payload: [] })
  }

  return { logout }
}
