import { useContext } from 'react'
import { WorkoutsContext } from '../contexts/Workouts'
import ICurrentWorkouts from '../interfaces/ICurrentWorkouts'
import IAction from '../interfaces/IAction'

export default function useWorkoutsContext (): [ICurrentWorkouts, React.Dispatch<IAction>] {
  const context = useContext(WorkoutsContext)

  if (context == null) {
    throw new Error('Must be used inside a WorkoutContextProvider')
  }

  return [context.state, context.dispatch]
}
