import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sideBar/Sidebar";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
