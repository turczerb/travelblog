import styled from "styled-components"; //css
//max 1 kép lehet. a kezdő index képp neki ez az indexpage
import { format } from "date-fns";

const Post = (props) => {
  return (
    <div>
      <div>
        <img src={props.cover} alt="" />
      </div>
      <div>
        <h1>{props.title}</h1>
      </div>
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
