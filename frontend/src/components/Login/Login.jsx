import { useState } from "react";
import styled from "styled-components"; //css

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

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //here we do somethin maybe the login?
    await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ userName, passWord }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
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
        <Submit>login</Submit>
      </InnerContainer>
    </Container>
  );
};

export default Login;
