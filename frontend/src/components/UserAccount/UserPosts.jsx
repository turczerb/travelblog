import UserPost from "./UserPost";
import styled from "styled-components"; //css
import ReactSearchBox from "react-search-box";
import SearchBar from "./SearchBar";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
const images = require.context("../../images");

const Pic = styled.img`
  width: 70%;
`;

const PicContainer = styled.div``;

// itt fetchelem le az adott szent user poszjait

const UserPosts = () => {
  const { userInfo } = useContext(UserContext); //ezt honnét szedI??
  let img = images("./myposts.png");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/myaccount/post/" + userInfo.id).then(
      (response) => {
        response.json().then((data) => {
          console.log(userInfo.id);
          setData(data);
          setFilterData(data);
          console.log(data);
        });
      }
    );
  }, []);

  //if (!data) return "";

  return (
    <div>
      <PicContainer>
        <Pic src={img} alt="pic"></Pic>
      </PicContainer>
      <div>
        <SearchBar
          data={data}
          filterData={filterData}
          setFilterData={setFilterData}
        />
        <div>
          {filterData.length > 0
            ? filterData.map((item, index) => {
                console.log("index");
                console.log(index);
                return <UserPost key={index} customindex={index} item={item} />;
              })
            : "city not found "}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
