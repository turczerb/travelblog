import UserPost from "./UserPost";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
const images = require.context("../../images");

// itt fetchelem le az adott szent user poszjait

const UserPosts = () => {
  let img = images("./myposts.png");
  const [data, setData] = useState([]);
  const { userInfo } = useContext(UserContext); //ezt honnét szedI??

  useEffect(() => {
    fetch("http://localhost:4000/myaccount/post/" + userInfo.id).then(
      (response) => {
        response.json().then((data) => {
          console.log("xx");
          //console.log(data);
          setData(data);
        });
      }
    );
  }, []);

  return (
    <div>
      <img src={img} alt="pic"></img>
      <div>
        {data.map((item, index) => {
          return <UserPost key={index} item={item} />;
        })}
        <div></div>
      </div>
    </div>
  );
};

export default UserPosts;
