import styled from "styled-components"; //css
//max 1 kép lehet. a kezdő index képp neki ez az indexpage
import { format } from "date-fns";
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import "../../index.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7e2df;
  width: 60%;
  border: 1px solid #946b2d;
  margin: 20px;
  border-radius: 10px;
`;

const PicContainer = styled.div`
  //overflow: hidden;
  //background-color: yellow;
  margin: 35px;
`;

const MainTitle = styled.h1`
  font-family: "Playpen Sans", cursive;
  color: black;
`;

const LinkContainer = styled(Link)``;

const Pic = styled.img`
  width: 300px;
  weight: 300px;
  // margin: -20% 0px -10px -40%;
  // max-width: 200%;
  //max-height: 200%;
`;

const Post = (props) => {
  return (
    <Container>
      <LinkContainer to={`post/${props._id}`}>
        <div>
          <MainTitle>{props.title}</MainTitle>
        </div>
        <PicContainer>
          <Pic src={"http://localhost:4000/" + props.cover[0]} alt="" />
        </PicContainer>
      </LinkContainer>
      <div>
        <div>
          <p> by {props.author}</p>
          <time>{format(new Date(props.createdAt), "MMMM d, yyyy HH:mm")}</time>
        </div>
        <div>
          <p>{props.placeChange}</p>
          <p>{props.selectedOptions}</p>
        </div>
        <div>
          <p>{props.summary}</p>
        </div>
      </div>
    </Container>
  );
};

export default Post;
