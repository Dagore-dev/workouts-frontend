import useAuthContext from './useAuthContext'

export default function useLogout (): { logout: () => void } {
  const [, authDispatch] = useAuthContext()

  function logout (): void {
    localStorage.removeItem('user')
    authDispatch({ type: 'LOGOUT', payload: null })
  }

  return { logout }
}
