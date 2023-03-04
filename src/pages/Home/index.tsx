import './styles.css'
import { useEffect, useState } from 'react'
import IWorkout from '../../interfaces/IWorkout'
import { API_URL } from '../../config'
import WorkoutDetails from '../../components/WorkoutDetails'
import WorkoutsForm from '../../components/WorkoutsForm'

export default function Home (): JSX.Element {
  const [workouts, setWorkouts] = useState<IWorkout[]>([])

  useEffect(() => {
    fetch(API_URL)
      .then(async response => {
        if (response.ok) {
          return await response.json()
        } else {
          throw new Error('Response not ok')
        }
      })
      .then(data => setWorkouts(data.workouts))
      .catch(console.log)
  }, [])

  return (
    <div className='home'>
      <ul className='workouts'>
        {
          workouts.map(workout => (
            <WorkoutDetails key={crypto.randomUUID()} workout={workout} />
          ))
        }
      </ul>
      <WorkoutsForm />
    </div>
  )
}
