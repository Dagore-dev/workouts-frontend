import './styles.css'
import IWorkout from '../../interfaces/IWorkout'
import { API_URL } from '../../config'
import useWorkoutsContext from '../../hooks/useWorkoutsContext'
import dateFormatter from '../../utils/dateFormatter'
import useAuthContext from '../../hooks/useAuthContext'

interface Props {
  workout: IWorkout
}

export default function WorkoutDetails (props: Props): JSX.Element {
  const { workout } = props
  const [, dispatch] = useWorkoutsContext()
  const [authState] = useAuthContext()

  function handleClick (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
    if (authState.user != null) {
      fetch(`${API_URL}/workouts/${workout._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authState.user.token}`
        }
      })
        .then(response => {
          if (response.ok) {
            response.json()
              .then(data => dispatch({ type: 'DELETE_WORKOUT', payload: [data] }))
              .catch(console.error)
          } else {
            throw new Error('Algo ha ido mal')
          }
        })
        .catch(console.error)
    }
  }

  return (
    <li className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Peso (kg): </strong>{workout.load}</p>
      <p><strong>Repeticiones: </strong>{workout.repetitions}</p>

      <p>{dateFormatter(workout.createdAt)}</p>

      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </li>
  )
}
