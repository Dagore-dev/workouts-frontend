import { ReactNode, createContext, useReducer, Dispatch } from 'react'
import IWorkoutAction from '../interfaces/IWorkoutAction'
import ICurrentWorkouts from '../interfaces/ICurrentWorkouts'

export const WorkoutsContext = createContext<null | { workoutsState: ICurrentWorkouts, workoutsDispatch: Dispatch<IWorkoutAction> }>(null)

export function workoutsReducer (state: ICurrentWorkouts, action: IWorkoutAction): ICurrentWorkouts {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { workouts: action.payload }
    case 'CREATE_WORKOUT':
      return { workouts: [...action.payload, ...state.workouts] }
    case 'DELETE_WORKOUT':
      return { workouts: state.workouts.filter(({ _id }) => action.payload.find(workout => workout._id === _id) === undefined) }
    default:
      return state
  }
}

interface Props {
  children: ReactNode
}

export function WorkoutsContextProvider (props: Props): JSX.Element {
  const [workoutsState, workoutsDispatch] = useReducer(workoutsReducer, {
    workouts: []
  })

  return (
    <WorkoutsContext.Provider value={{ workoutsState, workoutsDispatch }}>
      {props.children}
    </WorkoutsContext.Provider>
  )
}
