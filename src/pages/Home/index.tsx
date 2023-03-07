import './styles.css'
import WorkoutDetails from '../../components/WorkoutDetails'
import WorkoutsForm from '../../components/WorkoutsForm'
import useWorkouts from '../../hooks/useWorkouts'

export default function Home (): JSX.Element {
  const { workouts, isLoading } = useWorkouts()

  return (
    <div className='home'>
      <ul className='workouts'>
        {
          isLoading
            ? (
              <p>Cargando...</p>
              )
            : (
                workouts.map(workout => (
                  <WorkoutDetails key={crypto.randomUUID()} workout={workout} />
                ))
              )
        }
      </ul>
      <WorkoutsForm />
    </div>
  )
}
