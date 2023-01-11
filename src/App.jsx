import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Details from "./pages/Details";
import "./index.css";
import Sidebar from "./components/sideBar/Sidebar";
import AddBike from "./pages/AddBike";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="bikes/:param" element={<Details />} />
          <Route path="add_bike" element={<AddBike />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
