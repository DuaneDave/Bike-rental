import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import sessionStorage from './helpers/sessions';

import LogIn from './pages/LogIn';
import Sidebar from './components/sideBar/Sidebar';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import Details from './pages/Details';
import Reservations from './pages/Resevation';
import './index.css';

function App() {
  const user = sessionStorage('get');

  return (
    <React.Fragment>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          {user && <Route path='/home' element={<Home />} />}
          {user && <Route path='/bikes' element={<Bikes />} />}
          {user && <Route path='/details' element={<Details />} />}
          {user && <Route path='/reservations' element={<Reservations />} />}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
