import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import { useEffect, useState } from "react";

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
  const [userName, setUsername] = useState("");

  //why we need this part?
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.userName);
      });
    });
  }, []);

  return (
    <div>
      <Container>
        {userName && (
          <>
            <Link to="/create">create a new post</Link>
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
