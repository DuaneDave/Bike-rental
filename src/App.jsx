import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/sideBar/Sidebar'

function App() {

  return (
    <Router>
      <div className="App">
        <Sidebar/>
      </div>
    </Router>
  )
}

export default App
