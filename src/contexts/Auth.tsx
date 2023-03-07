import { ReactNode, createContext, useReducer, Dispatch, useEffect } from 'react'
import IAuthAction from '../interfaces/IAuthAction'
import ICurrentUser from '../interfaces/ICurrentUser'
import IUser from '../interfaces/IUser'

export const AuthContext = createContext<null | { authState: ICurrentUser, authDispatch: Dispatch<IAuthAction> }>(null)

export function authReducer (authState: ICurrentUser, action: IAuthAction): ICurrentUser {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return authState
  }
}

interface Props {
  children: ReactNode
}

export function AuthContextProvider (props: Props): JSX.Element {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    const storedJSON = localStorage.getItem('user')
    if (storedJSON != null) {
      const user = JSON.parse(storedJSON) satisfies IUser as IUser
      authDispatch({ type: 'LOGIN', payload: user })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
