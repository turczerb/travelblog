import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import styled from "styled-components"; //css
import ImageGallery from "react-image-gallery"; //gallery
import "../../index.css";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import { IoCreateOutline } from "react-icons/io5";

const Pic = styled.img`
  width: 50%;
  weight: 300px;
  // margin: -20% 0px -10px -40%;
  // max-width: 200%;
  //max-height: 200%;
`;

const Edit = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bold;
  }
`;

const PicConti = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px;
`;

const OutterContainer = styled.div`
  background-color: #e7e2df;
  width: 70%;
  margin-top: 40px;
  padding: 40px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FirstElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const BasicDataConti = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 4fr;
  colour: black;
`;

const Title = styled.h1`
  font-size: 60px;
  font-family: "Playpen Sans", cursive;
  font-weight: bold;
`;

//kell az id h egy specifikus  posztot fetcheljünk le. honnét szedem az idt? useParams
const PostMore = () => {
  const [data, setData] = useState("");
  const { userInfo } = useContext(UserContext); //ezt honnét szedI??
  const { _id } = useParams(); //post id
  console.log("ez az id kell" + _id);

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

  const tomb = [];
  for (let i = 0; i < data.cover.length; i++) {
    tomb.push({
      original: "http://localhost:4000/" + data.cover[i],
      thumbnail: "http://localhost:4000/" + data.cover[i],
    });
  }

  return (
    <Container>
      <OutterContainer>
        <div>
          <FirstElement>
            <BasicDataConti>
              <div></div>
              <div>
                <Title>{data.title}</Title>
              </div>
              <div>
                <div>{data.author.userName}</div>
                {userInfo.id === data.author._id && (
                  <div>
                    <IoCreateOutline />
                    <Edit to={`/edit/${data._id}`}>Edit this post</Edit>
                  </div>
                )}
                <div>{format(new Date(data.createdAt), "MMMM d, yyyy")}</div>
                <div>{data.placeChange}</div>
                <div>{data.selectedOptions}</div>
              </div>
            </BasicDataConti>
            <div>
              <PicConti>
                <ImageGallery items={tomb} />
              </PicConti>
            </div>
          </FirstElement>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </OutterContainer>
    </Container>
  );
};

export default PostMore;
