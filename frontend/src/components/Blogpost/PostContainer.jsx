import Post from "./Post";
import { useEffect, useState } from "react";
import styled from "styled-components"; //css
//max 1 kép lehet. a kezdő index képp neki ez az indexpage

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const PostContainer = () => {
  //kell egy useeffect h fetcheljük a datát a saját adatbázisunkból.
  const [data, setData] = useState([]);

  useEffect(() => {
    //when we mount the homepage I want to run this homepage
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setData(data);
      }); //all the post for the homepage
    });
  }, []);

  return (
    <Container>
      <InnerContainer>
        {data.map((item, index) => {
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
    </Container>
  );
};

export default PostContainer;
