import useAuthContext from '../../hooks/useAuthContext'
import useLogout from '../../hooks/useLogout'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Nav (): JSX.Element {
  const { logout } = useLogout()
  const [{ user }] = useAuthContext()

  return (
    <nav>
      <input id='menu-toggle' type='checkbox' />
      <label className='menu-button-container' htmlFor='menu-toggle'>
        <div className='menu-button' />
      </label>
      <ul className='menu'>
        {
          user != null
            ? (
              <>
                <li><span>{user?.email}</span></li>
                <li><button onClick={logout}>Cerrar sesión</button></li>
              </>
              )
            : (
              <>
                <li><Link to='/login'>Iniciar sesión</Link></li>
                <li><Link to='/signup'>Registrarse</Link></li>
              </>
              )
          }
      </ul>
    </nav>
  )
}
