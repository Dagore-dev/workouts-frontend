import { ReactNode, createContext, useReducer } from 'react'
import IAction from '../interfaces/IAction'
import ICurrentWorkouts from '../interfaces/ICurrentWorkouts'

export const WorkoutsContext = createContext<null | { state: ICurrentWorkouts, dispatch: React.Dispatch<IAction> }>(null)

export function workoutsReducer (state: ICurrentWorkouts, action: IAction): ICurrentWorkouts {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { workouts: action.payload }
    case 'CREATE_WORKOUT':
      return { workouts: [...action.payload, ...state.workouts] }
    default:
      return state
  }
}

interface Props {
  children: ReactNode
}

export function WorkoutsContextProvider (props: Props): JSX.Element {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: []
  })

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </WorkoutsContext.Provider>
  )
}
