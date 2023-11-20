import styled from "styled-components"; //css
//nyitva vagy csukva van a sub nav bár ehhez kell majd az useComponentVisible hook ami külön mappában van
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import useComponentVisible from "../../hooks/useComponentVisible";
import "../../index.css";

const Element = styled.div``;

//posi absolute: lenyilo menu nm nyilik le mindenütt csak ahol kell.
const DropDownContainer = styled.div`
  position: absolute;
`;

const SubElement = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: yellow;
`;

const ElementLink = styled(Link)`
  color: black;
`;

const Title = styled.div`
  &:hover {
    border-left: 2px solid #946b2d;
  }
`;

const SubNavBar = ({ item }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const showComponent = (e) => {
    e.preventDefault();
    setIsComponentVisible(!isComponentVisible);
    console.log(isComponentVisible);
  };

  return (
    <div ref={ref}>
      <Element to={item.path} onClick={item.subNav && showComponent}>
        <div>
          <ElementLink href="/">{item.title}</ElementLink>
          {item.subNav && isComponentVisible
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
          <DropDownContainer>
            {isComponentVisible &&
              item.subNav.map((item, index) => {
                return (
                  <SubElement to={item.path} key={index}>
                    <Title>{item.title}</Title>
                  </SubElement>
                );
              })}
          </DropDownContainer>
        </div>
      </Element>
    </div>
  );
};

export default SubNavBar;
