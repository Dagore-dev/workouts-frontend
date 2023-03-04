import './styles.css'
import IWorkout from '../../interfaces/IWorkout'

interface Props {
  workout: IWorkout
}

export default function WorkoutDetails (props: Props): JSX.Element {
  const { workout } = props

  return (
    <li className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Peso (kg): </strong>{workout.load}</p>
      <p><strong>Repeticiones: </strong>{workout.repetitions}</p>

      <p>{workout.createdAt}</p>
    </li>
  )
}
