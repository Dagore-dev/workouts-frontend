import IUser from './IUser'

export default interface IAuthAction {
  type: 'LOGIN' | 'LOGOUT'
  payload: null | IUser
}
