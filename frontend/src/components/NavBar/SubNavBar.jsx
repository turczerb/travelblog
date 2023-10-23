import styled from "styled-components"; //css
//nyitva vagy csukva van a sub nav bár ehhez kell majd az useComponentVisible hook ami külön mappában van
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import useComponentVisible from "../../hooks/useComponentVisible";

const Element = styled.div``;

const DropDownContainer = styled.div``;

const SubElement = styled(Link)``;

const Title = styled.div``;

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
          <span>{item.title}</span>
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
