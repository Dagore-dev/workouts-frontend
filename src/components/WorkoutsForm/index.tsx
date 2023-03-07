import './styles.css'
import { useState } from 'react'
import { API_URL } from '../../config'
import useWorkoutsContext from '../../hooks/useWorkoutsContext'
import WorkoutsFormField from '../WorkoutsFormField'
import useAuthContext from '../../hooks/useAuthContext'

export default function WorkoutsForm (): JSX.Element {
  const [, dispatch] = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [repetitions, setRepetitions] = useState('')
  const [error, setError] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  const [authState] = useAuthContext()

  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const workout = {
      title,
      load: Number(load),
      repetitions: Number(repetitions)
    }

    if (authState.user != null) {
      fetch(`${API_URL}/workouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authState.user.token}`
        },
        body: JSON.stringify(workout)
      })
        .then(response => {
          response.json()
            .then(data => {
              if (response.ok) {
                setError('')
                setEmptyFields([])
                setTitle('')
                setLoad('')
                setRepetitions('')

                dispatch({ type: 'CREATE_WORKOUT', payload: [data] })
              } else {
                setError(data.error)
                setEmptyFields(data.emptyFields)
              }
            })
            .catch(error => setError(error.message))
        })
        .catch(error => setError(error.message))
    } else {
      setError('Necesitas iniciar sesión.')
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Añade un nuevo ejercicio</h3>

      <WorkoutsFormField
        id='title'
        label='Nombre'
        type='text'
        value={title}
        setter={setTitle}
        emptyFields={emptyFields}
      />

      <WorkoutsFormField
        id='load'
        label='Peso (Kg)'
        type='number'
        value={load}
        setter={setLoad}
        emptyFields={emptyFields}
      />

      <WorkoutsFormField
        id='repetitions'
        label='Repeticiones'
        type='number'
        value={repetitions}
        setter={setRepetitions}
        emptyFields={emptyFields}
      />

      <button>Añadir ejercicio</button>

      {error.length !== 0 && <div className='error'>{error}</div>}
    </form>
  )
}
