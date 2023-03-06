import { useContext } from 'react'
import { WorkoutsContext } from '../contexts/Workouts'
import ICurrentWorkouts from '../interfaces/ICurrentWorkouts'
import IWorkoutAction from '../interfaces/IWorkoutAction'

export default function useWorkoutsContext (): [ICurrentWorkouts, React.Dispatch<IWorkoutAction>] {
  const context = useContext(WorkoutsContext)

  if (context == null) {
    throw new Error('Must be used inside a WorkoutContextProvider')
  }

  return [context.workoutsState, context.workoutsDispatch]
}
