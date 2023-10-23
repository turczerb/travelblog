import styled from "styled-components"; //css

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Title = styled.div`
  background-color: blue;
`;

const LoginAndReg = () => {
  return (
    <div>
      <Container>
        <Title>login</Title>
        <Title>regi</Title>
      </Container>
    </div>
  );
};

export default LoginAndReg;
