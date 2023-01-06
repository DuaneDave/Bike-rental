import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/Bikes' >
          <Route index  element = {<Home />}/>
          <Route path=':id' element = {<Details />} />
        </Route>
      </Routes>
      </div>
  )
}

export default App
