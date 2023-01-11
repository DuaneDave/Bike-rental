import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Sidebar from "./components/sideBar/Sidebar";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Details from "./pages/Details";
import Reservations from "./pages/Resevation";
import "./index.css";
import AddBike from "./pages/AddBike";
import Delete from "./pages/Delete";
import MyReservations from "./pages/MyReservations";

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
          <Route path="/reserve" element={<Reservations />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/reservations" element={<MyReservations />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
