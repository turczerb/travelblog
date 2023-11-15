import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import styled from "styled-components"; //css

const Pic = styled.img`
  width: 60%;
  weight: 300px;
  // margin: -20% 0px -10px -40%;
  // max-width: 200%;
  //max-height: 200%;
`;

const PicConti = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OutterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  width: 70%;
  margin: 15% 0px 0px 15%;
`;

//kell az id h egy specifikus  posztot fetcheljünk le. honnét szedem az idt? useParams
const PostMore = () => {
  const [data, setData] = useState("");
  const { _id } = useParams();

  //ehhez is kell andpoint index.js-be
  useEffect(() => {
    fetch("http://localhost:4000/post/" + _id).then((response) => {
      response.json().then((data) => {
        setData(data);
        console.log(data);
      });
    });
  }, []);

  if (!data) return "";

  return (
    <OutterContainer>
      <div>
        <div>
          <h1>{data.title}</h1>
        </div>
        <PicConti>
          <Pic src={"http://localhost:4000/" + data.cover[0]} alt="" />
        </PicConti>
        <div>
          <div>
            <div>{data.author.userName}</div>
          </div>
          <div>
            <div>{format(new Date(data.createdAt), "MMMM d, yyyy")}</div>
          </div>
        </div>
        <div>
          <div>
            <div>{data.placeChange}</div>
          </div>
          <div>
            <div>{data.selectedOptions}</div>
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div>ide jönnek a képek somehow</div>
      </div>
    </OutterContainer>
  );
};

export default PostMore;
