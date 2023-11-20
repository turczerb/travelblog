import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { BsFilePost } from "react-icons/bs";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 
  grid-gap: 20px;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    border-left: 2px solid #946b2d;
  }
`;

const LinkTitle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NavTitle = styled.div`
  padding: 5px;
  margin: 4px;
  &:hover {
    border-left: 2px solid #946b2d;
  }
`;

//so here we have to use ternary, is it already logged in? we have a cookie inside our token
//cookie valid? we need to create an endpoint for it !! index.js
const LoginAndReg = () => {
  const navigate = useNavigate();
  //we shouldnt put the name data in the header --> useContext is the answer

  //const [isADmin, setIsADmin] = useState(true);

  const { setUserInfo, userInfo } = useContext(UserContext);

  const { _id } = useParams();
  console.log("user info neve: " + userInfo.userName);

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
    setUserInfo("");
    navigate("/");
  };

  const userName = userInfo?.userName;
  const isADmin = userInfo?.isAdmin;

  return (
    <div>
      <Container>
        {userName && !isADmin && (
          <>
            <NavTitle>
              <LuUser2 />
              <LinkTitle to="/myaccount">{userInfo.userName}</LinkTitle>
            </NavTitle>
            <NavTitle>
              <IoCreateOutline />
              <LinkTitle to="/create">create a new post</LinkTitle>
            </NavTitle>
            <NavTitle>
              <RiLogoutBoxRLine />
              <LinkTitle onClick={logout}> Logout</LinkTitle>
            </NavTitle>
          </>
        )}
        {userName && isADmin && (
          <>
            <div>
              <LuUser2 />
              <LinkTitle to="/myaccount">{userName}</LinkTitle>
            </div>
            <div>
              <IoCreateOutline />
              <LinkTitle to="/create">create a new post</LinkTitle>
            </div>

            <div>
              <BsFilePost />
              <LinkTitle to="/check">check the waiting posts</LinkTitle>
            </div>

            <div>
              <RiLogoutBoxRLine />
              <LinkTitle onClick={logout}> Logout</LinkTitle>
            </div>
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
