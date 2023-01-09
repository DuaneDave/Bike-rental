import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Sidebar from './components/sideBar/Sidebar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Sidebar />
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
