import React, { useEffect } from "react";
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
import DeleteBike from "./pages/DeleteBike";
import MyReservations from "./pages/MyReservations";
import sessionStorage from "./helpers/sessions";
import Error from "./pages/404Page";
import { useGetBikesQuery } from "./components/api/apiSlice";
import Spiner from "./reusables/spiner/Spinner";

function App() {
  const user = sessionStorage("get");
  const theme = localStorage.getItem("theme");

  const { isLoading } = useGetBikesQuery();
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }

    if (theme === "light") {
      document.body.classList.remove("dark");
    }
  });

  return (
    <React.Fragment>
      <Router>
        {isLoading && <Spiner />}
        {user && <Sidebar />}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          {user && <Route path="/home" element={<Home />} />}
          {user && <Route path="/bikes" element={<Bikes />} />}
          {user && <Route path="/bikes/:param" element={<Details />} />}
          {user && <Route path="/reserve" element={<Reservations />} />}
          {user && <Route path="/delete_bike" element={<DeleteBike />} />}
          {user && <Route path="/reservations" element={<MyReservations />} />}
          {user && <Route path="/add_bike" element={<AddBike />} />}
          {user && <Route path="*" element={<Error />} />}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
