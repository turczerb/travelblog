import Home from "./components/Home";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import { UserContextProvider } from "./components/UserContext";
import CreateNewPost from "./components/CreatePost/CreateNewPost";
import PostMore from "./components/Blogpost/PostMore";
import EditPost from "./components/EditPost/EditPost";
import UserAccount from "./components/UserAccount/UserAccount";

function App() {
  return (
    <UserContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/create" exact element={<CreateNewPost />} />
          <Route path="/post/:_id" exact element={<PostMore />} />
          <Route path="/edit/:_id" exact element={<EditPost />} />
          <Route path="/myaccount" exact element={<UserAccount />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
