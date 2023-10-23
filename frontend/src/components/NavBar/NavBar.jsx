import SubNavBar from "./SubNavBar";
import LoginAndReg from "../Login/LoginAndReg";
import styled from "styled-components"; //css
import { NavbarData } from "./NavBarData"; // contains nav data
const images = require.context("../../images"); // be importálom a képet  You can create your own context with the require.context() function.

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Nav = styled.nav`
  // ez itt maga a home, destination, typo of travel pozit adta meg,

  padding: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Pic = styled.img`
  width: 150px;
`;

const Navbar = () => {
  let img = images("./logo.png");
  return (
    <Container>
      <Pic src={img} alt="pic"></Pic>
      <Nav>
        {NavbarData.map((item, index) => {
          return <SubNavBar item={item} key={index} />;
        })}{" "}
        <div>
          <LoginAndReg />
        </div>
      </Nav>
    </Container>
  );
};

export default Navbar;
