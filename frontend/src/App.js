import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './Components/home'
import { SuperheroesRQ } from './Components/superheroesRQ'
import { Superheroes } from './Components/superheroes'

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route  path='/super-heroes'  element={ <Superheroes />} />
            <Route  path='/rq-super-heroes' element={<SuperheroesRQ />}/>
            <Route  path='/' element={<HomePage />}/>

          </Routes>
        </div>
      </Router>
  )
}

export default App