import { ReactNode, createContext, useReducer, Dispatch } from 'react'
import IAuthAction from '../interfaces/IAuthAction'
import ICurrentUser from '../interfaces/ICurrentUser'

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

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
