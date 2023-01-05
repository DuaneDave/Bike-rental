import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sideBar/Sidebar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
