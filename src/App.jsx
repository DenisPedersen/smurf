import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import Persons from './Persons'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AlbumDetails from './AlbumDetails'
import NotFound from './NotFound'
import PersonDetails from './PersonDetails'


function App() {


  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className='content'>

          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/create" element={<Create />} />
            <Route path="/albums/:id" element={<AlbumDetails />}
             />
             <Route path="/persons/:id" element={<PersonDetails />}
             />

          {/*   <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Routes>

        </div>


      </div>
    </Router>
  )
}

export default App
