import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components"; //css
import { UserContext } from "../UserContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: auto;
`;

const InnerContainer = styled.form`
  display: grid;
  grid-gap: 10px;
`;

const Submit = styled.button`
  cursor: pointer;
  border-radius: 12px;
  padding: 6px;
  border: none;
  margin-top: 20px;
  background-color: #08d;
`;

const Stilo = styled.input`
  border-radius: 12px;
  padding: 10px;
  border: none;
  background-color: #ddd;
`;

const Login = () => {
  //itt is kellenek statek
  //onchange. //ez a jelenlegi cím ezzel állitom be. pl handletitlechange

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const login = async (e) => {
    e.preventDefault();
    //here we do somethin maybe the login?
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ userName, passWord, isAdmin }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      //if we have cookie we can save it in cred
    });

    //ha be tudtuk sikeressen jelentkezni -->redirect to the hompage--> kell 1 state
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      console.log("lefut ez az ág??");
      alert("wrong cred");
    }
  };

  //ha be vagyunk siekersen lépve akkor menjen a föoldalra
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container onSubmit={login}>
      <InnerContainer>
        <Stilo
          type="text"
          placeholder="username"
          value={userName}
          onChange={handleUsernameChange}
        />
        <Stilo
          type="password"
          placeholder="password"
          value={passWord}
          onChange={handlePasswordChange}
        />
        <Submit disabled={!userName || !passWord}>login</Submit>
      </InnerContainer>
    </Container>
  );
};

export default Login;
