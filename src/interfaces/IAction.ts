import IWorkout from './IWorkout'

export default interface IAction {
  type: string
  payload: IWorkout[]
}
