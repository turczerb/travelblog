import styled from "styled-components"; //css
//max 1 kép lehet. a kezdő index képp neki ez az indexpage
import { format } from "date-fns";
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump

const PicContainer = styled.div`
  //overflow: hidden;
  //background-color: yellow;
`;

const LinkContainer = styled(Link)``;

const Pic = styled.img`
  width: 200px;
  weight: 200px;
  // margin: -20% 0px -10px -40%;
  // max-width: 200%;
  //max-height: 200%;
`;

const Post = (props) => {
  return (
    <div>
      <LinkContainer to={`post/${props._id}`}>
        <PicContainer>
          <Pic src={"http://localhost:4000/" + props.cover[0]} alt="" />
        </PicContainer>
        <div>
          <h1>{props.title}</h1>
        </div>
      </LinkContainer>
      <div>
        <div>
          <p>{props.author}</p>
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
    </div>
  );
};

export default Post;
