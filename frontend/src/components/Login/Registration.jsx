import { useState } from "react";
import styled from "styled-components"; //css
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

// some magic here to app.post works at backend part.

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

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [passWordAgain, setPasswordAgain] = useState("");
  const [isAdmin, setIsadmin] = useState(false);
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //we want to send a post request --> fetch what we have to doo.
    const response = await fetch(
      "http://localhost:4000/registration",

      {
        method: "POST",
        body: JSON.stringify({ userName, passWord, isAdmin, email }), // converts JavaScript objects into strings
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.status !== 200) {
      alert("registration failed");
    } else {
      //alert("registration success");
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Container>
      <InnerContainer onSubmit={handleSubmit}>
        <Stilo
          type="text"
          placeholder="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <Stilo
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <Stilo
          type="password"
          placeholder="password"
          value={passWord}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Stilo
          type="password"
          placeholder="password again"
          value={passWordAgain}
          onChange={(event) => setPasswordAgain(event.target.value)}
        />
        <Submit disabled={!userName || !email || !passWord || !passWordAgain}>
          Register
        </Submit>
      </InnerContainer>
    </Container>
  );
};

export default Registration;
