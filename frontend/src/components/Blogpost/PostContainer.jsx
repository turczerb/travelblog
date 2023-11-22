import Post from "./Post";
import { useEffect, useState } from "react";
import styled from "styled-components"; //css
//max 1 kép lehet. a kezdő index képp neki ez az indexpage
const images = require.context("../../images");

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const SecondInnerContainer = styled.div`
  margin: 120px;
`;

const Pic = styled.img`
  width: 560px;
  margin-bottom: 150px;
  margin-top: 130px;
  //F09A99
`;
const Pic2 = styled.img`
  width: 300px;
  margin-bottom: 150px;
  margin-top: 140px;
  transform: rotate(15deg);
  padding-left: 70px;

  //F09A99
`;

const TitleHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const PostContainer = () => {
  let img = images("./logo-story.png");
  let img2 = images("./picholder.png");
  //kell egy useeffect h fetcheljük a datát a saját adatbázisunkból.
  const [data, setData] = useState([]);

  useEffect(() => {
    //when we mount the homepage I want to run this homepage
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((data) => {
        console.log("mi az összes");
        console.log(data);
        setData(data);
      }); //all the post for the homepage
    });
  }, []);

  return (
    <>
      <TitleHolder>
        <div></div>
        <div>
          <Pic src={img} alt="pic"></Pic>
        </div>
        <div>
          <Pic2 src={img2} alt="pic"></Pic2>
        </div>
        <div></div>
      </TitleHolder>
      <Container>
        <InnerContainer>
          {data.slice(0, 3).map((item, index) => {
            return (
              <Post
                key={index}
                title={item.title}
                createdAt={item.createdAt}
                placeChange={item.placeChange}
                selectedOptions={item.selectedOptions}
                summary={item.summary}
                author={item.author.userName}
                cover={item.cover}
                _id={item._id}
                isChecked={item.isChecked}
              />
            );
          })}
        </InnerContainer>
        <SecondInnerContainer>
          {data.slice(3).map((item, index) => {
            return (
              <Post
                key={index}
                title={item.title}
                createdAt={item.createdAt}
                placeChange={item.placeChange}
                selectedOptions={item.selectedOptions}
                summary={item.summary}
                author={item.author.userName}
                cover={item.cover}
                _id={item._id}
                isChecked={item.isChecked}
              />
            );
          })}
        </SecondInnerContainer>
      </Container>
    </>
  );
};

export default PostContainer;
