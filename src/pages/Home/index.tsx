import './styles.css'
import { useEffect, useState } from 'react'
import IWorkout from '../../interfaces/IWorkout'
import WorkoutDetails from '../../components/WorkoutDetails'

export default function Home (): JSX.Element {
  const [workouts, setWorkouts] = useState<IWorkout[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/workouts')
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
    </div>
  )
}
