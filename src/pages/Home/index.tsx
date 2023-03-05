import './styles.css'
import { useEffect } from 'react'
import { API_URL } from '../../config'
import WorkoutDetails from '../../components/WorkoutDetails'
import WorkoutsForm from '../../components/WorkoutsForm'
import useWorkoutsContext from '../../hooks/useWorkoutsContext'

export default function Home (): JSX.Element {
  const [state, dispatch] = useWorkoutsContext()

  useEffect(() => {
    fetch(API_URL)
      .then(async response => {
        if (response.ok) {
          return await response.json()
        } else {
          throw new Error('Response not ok')
        }
      })
      .then(data => dispatch({ type: 'SET_WORKOUTS', payload: data.workouts }))
      .catch(console.log)
  }, [])

  return (
    <div className='home'>
      <ul className='workouts'>
        {
          state.workouts.map(workout => (
            <WorkoutDetails key={crypto.randomUUID()} workout={workout} />
          ))
        }
      </ul>
      <WorkoutsForm />
    </div>
  )
}
