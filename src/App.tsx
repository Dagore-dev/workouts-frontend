import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App (): JSX.Element {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <main className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
