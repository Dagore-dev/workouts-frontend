import IWorkout from './IWorkout'

export default interface IAction {
  type: 'SET_WORKOUTS' | 'CREATE_WORKOUT' | 'DELETE_WORKOUT'
  payload: IWorkout[]
}
