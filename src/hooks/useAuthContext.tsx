import { Dispatch, useContext } from 'react'
import ICurrentUser from '../interfaces/ICurrentUser'
import IAuthAction from '../interfaces/IAuthAction'
import { AuthContext } from '../contexts/Auth'

export default function useAuthContext (): [ICurrentUser, Dispatch<IAuthAction>] {
  const context = useContext(AuthContext)

  if (context == null) {
    throw new Error('Must be used inside an AuthContextProvider')
  }

  return [context.authState, context.authDispatch]
}
