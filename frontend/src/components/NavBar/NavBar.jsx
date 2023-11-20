import SubNavBar from "./SubNavBar";
import LoginAndReg from "../Login/LoginAndReg";
import styled from "styled-components"; //css
import { NavbarData } from "./NavBarData"; // contains nav data
const images = require.context("../../images"); // be importálom a képet  You can create your own context with the require.context() function.

const Container = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
`;

const Nav = styled.nav`
  // ez itt maga a home, destination, typo of travel pozit adta meg,

  padding: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Pic = styled.img`
  width: 170px;
  padding-top: 20px;
  transition: transform 2s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

const HeaderImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavBarContents = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-evenly;
`;

const Navbar = () => {
  let img = images("./logo.png");
  return (
    <Container>
      <ImgContainer>
        <div></div>
        <div>
          <HeaderImage>
            <Pic src={img} alt="pic"></Pic>
          </HeaderImage>
        </div>
        <div></div>
      </ImgContainer>
      <Nav>
        <NavBarContents>
          {NavbarData.map((item, index) => {
            return <SubNavBar item={item} key={index} />;
          })}
        </NavBarContents>
        <div></div>
        <div>
          <LoginAndReg />
        </div>
      </Nav>
    </Container>
  );
};

export default Navbar;
