import './styles.css'
import { useState } from 'react'
import { API_URL } from '../../config'

export default function WorkoutsForm (): JSX.Element {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [repetitions, setRepetitions] = useState('')
  const [error, setError] = useState('')

  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const workout = {
      title,
      load: Number(load),
      repetitions: Number(repetitions)
    }

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    })
      .then(response => {
        if (response.ok) {
          response.json()
            .then(data => {
              setError('')
              setTitle('')
              setLoad('')
              setRepetitions('')

              console.log(data)
            })
            .catch(error => setError(error.message))
        } else {
          throw new Error('Algo fue mal')
        }
      })
      .catch(error => setError(error.message))
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Añade un nuevo ejercicio</h3>

      <label htmlFor='title'>Nombre:</label>
      <input
        id='title'
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor='title'>Peso (Kg):</label>
      <input
        id='peso'
        type='number'
        min={0}
        onChange={e => setLoad(e.target.value)}
        value={load}
      />

      <label htmlFor='repetitions'>Repeticiones:</label>
      <input
        id='repetitions'
        type='number'
        min={1}
        onChange={e => setRepetitions(e.target.value)}
        value={repetitions}
      />

      <button>Añadir ejercicio</button>

      {error.length !== 0 && <div className='error'>{error}</div>}
    </form>
  )
}
