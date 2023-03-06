import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App (): JSX.Element {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <main className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
