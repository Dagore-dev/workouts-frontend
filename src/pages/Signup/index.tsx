import { useState } from 'react'

export default function Signup (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
  }

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Regístrate</h3>

      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        id='email'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor='password'>Contraseña:</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />

      <button>Registrarse</button>
    </form>
  )
}
