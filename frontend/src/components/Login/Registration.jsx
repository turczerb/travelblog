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

const Registration = () => {
  return (
    <Container>
      <InnerContainer>
        <Stilo type="text" placeholder="register" />
        <Stilo type="password" placeholder="password" />
        <Submit>Register</Submit>
      </InnerContainer>
    </Container>
  );
};

export default Registration;
