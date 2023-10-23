import Home from "./components/Home";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/registration" exact element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
