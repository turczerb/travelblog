import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Title = styled(Link)``;

const LoginAndReg = () => {
  return (
    <div>
      <Container>
        <Title to="/login">login</Title>
        <Title to="/registration">registration</Title>
      </Container>
    </div>
  );
};

export default LoginAndReg;
