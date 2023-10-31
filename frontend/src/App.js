import Home from "./components/Home";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import { UserContextProvider } from "./components/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
