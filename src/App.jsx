import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BikeList from './components/bikes/BikeList'
import Sidebar from './components/sideBar/Sidebar'
function App() {

  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <BikeList />
      </div>
    </Router>
  )
}

export default App
