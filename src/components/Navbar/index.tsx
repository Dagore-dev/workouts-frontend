import useAuthContext from '../../hooks/useAuthContext'
import useLogout from '../../hooks/useLogout'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  const { logout } = useLogout()
  const [authState] = useAuthContext()

  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {
            authState.user != null
              ? (
                <div>
                  <span>{authState.user?.email}</span>
                  <button onClick={logout}>Cerrar sesión</button>
                </div>
                )
              : (
                <div>
                  <Link to='/login'>Iniciar sesión</Link>
                  <Link to='/signup'>Registrarse</Link>
                </div>
                )
          }
        </nav>
      </div>
    </header>
  )
}
