import styled from "styled-components"; //css
//max 1 kép lehet. a kezdő index képp neki ez az indexpage
import { format } from "date-fns";
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import "../../index.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e7e2df;
  width: 60%;
  border: 1px solid #946b2d;
  margin: 20px;
  border-radius: 10px;
  margin: 35px;
  width: 993px;
  height: 625px;
  padding: 10px;

  &:hover {
    border: 2px solid #946b2d;
  }
`;

const WhiteContainer = styled.div`
  background-color: white;
  width: 60%;
  height: 18%;
  border-radius: 5px;
`;

const OutterWhiteContainer = styled.div`
  position: absolute;
  top: 55%;
  width: 100%;
  padding: 25%;
`;

const PicContainer = styled.div`
  margin: 35px;
`;

const MainTitle = styled.h1`
  font-family: "Playpen Sans", cursive;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 0em;
`;

const LinkContainer = styled(Link)`
  position: relative;
`;

const AuthorContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
`;

const Pic = styled.img`
  width: 300px;

  weight: 300px;
  // margin: -20% 0px -10px -40%;
  // max-width: 200%;
  //max-height: 200%;
  height: auto;
`;

const Author = styled.p`
  color: black;
  margin-block-start: 0em;
`;

const DateDesign = styled.div`
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  padding-right: 10px;
  padding-bottom: 8px;
`;

const MoreInfo = styled.div`
  display: grid;
  position: static;
`;

const Post = (props) => {
  return (
    <Container>
      <LinkContainer to={`post/${props._id}`}>
        <PicContainer>
          <Pic src={"http://localhost:4000/" + props.cover[0]} alt="" />
        </PicContainer>
        <OutterWhiteContainer>
          <WhiteContainer>
            <div>
              <MainTitle>{props.title}</MainTitle>
            </div>
            <AuthorContainer>
              <Author> by {props.author}, </Author>
            </AuthorContainer>
          </WhiteContainer>
        </OutterWhiteContainer>
      </LinkContainer>
      <MoreInfo>
        <div>
          <p>{props.placeChange}</p>
          <p>{props.selectedOptions}</p>
        </div>
        <div>
          <p>{props.summary}</p>
        </div>
        <DateDesign>
          <p>{format(new Date(props.createdAt), "MMM d, yyyy")}</p>
        </DateDesign>
      </MoreInfo>
    </Container>
  );
};

export default Post;
