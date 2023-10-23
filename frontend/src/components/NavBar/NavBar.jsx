import SubNavBar from "./SubNavBar";
import styled from "styled-components"; //css
import { NavbarData } from "./NavBarData"; // contains nav data

const Container = styled.div``;

const Nav = styled.nav`
  background-color: milky;
  padding: 20px;
  margin-top: 30px;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        {NavbarData.map((item, index) => {
          return <SubNavBar item={item} key={index} />;
        })}
        <div>login</div>
        <div>register</div>
      </Nav>
    </Container>
  );
};

export default Navbar;
