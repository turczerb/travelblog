import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    border-left: 2px solid #946b2d;
  }
`;

//so here we have to use ternary, is it already logged in? we have a cookie inside our token
//cookie valid? we need to create an endpoint for it !! index.js
const LoginAndReg = () => {
  //we shouldnt put the name data in the header --> useContext is the answer
  //const [userName, setUsername] = useState("");
  //const [isADmin, setIsADmin] = useState(true);

  const { setUserInfo, userInfo } = useContext(UserContext);

  //why we need this part?
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    //we want to the cookie invalidate
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const userName = userInfo?.userName;
  const isADmin = userInfo?.isAdmin;

  return (
    <div>
      <Container>
        {userName && !isADmin && (
          <>
            <Link to="/create">create a new post</Link>
            <a onClick={logout}> Logout</a>
          </>
        )}
        {userName && isADmin && (
          <>
            <Link to="/create">create a new post</Link>
            <Link to="/check">check the waiting posts</Link>
            <a>Logout</a>
          </>
        )}
        {!userName && (
          <>
            <Title to="/login">login</Title>
            <Title to="/registration">registration</Title>
          </>
        )}
      </Container>
    </div>
  );
};

export default LoginAndReg;
