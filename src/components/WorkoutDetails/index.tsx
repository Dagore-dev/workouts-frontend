import './styles.css'
import IWorkout from '../../interfaces/IWorkout'
import { API_URL } from '../../config'
import useWorkoutsContext from '../../hooks/useWorkoutsContext'
import dateFormatter from '../../utils/dateFormatter'

interface Props {
  workout: IWorkout
}

export default function WorkoutDetails (props: Props): JSX.Element {
  const { workout } = props
  const [, dispatch] = useWorkoutsContext()

  function handleClick (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
    fetch(`${API_URL}/${workout._id}`, {
      method: 'DELETE'
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
