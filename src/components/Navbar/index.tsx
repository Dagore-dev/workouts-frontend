import './styles.css'
import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
