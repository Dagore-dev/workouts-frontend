import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import useAuthContext from './hooks/useAuthContext'

export default function App (): JSX.Element {
  const [authState] = useAuthContext()
  function isUserIsLogged (): boolean {
    return authState.user != null
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <main className='pages'>
          <Routes>
            <Route path='/' element={isUserIsLogged() ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={isUserIsLogged() ? <Navigate to='/' /> : <Login />} />
            <Route path='/signup' element={isUserIsLogged() ? <Navigate to='/' /> : <Signup />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
