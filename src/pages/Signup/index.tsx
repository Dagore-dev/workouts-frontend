import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

export default function Signup (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isLoading, signup } = useSignup()

  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    signup(email, password)
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

      <button disabled={isLoading}>Registrarse</button>

      {error.length !== 0 && <div className='error'>{error}</div>}
    </form>
  )
}
