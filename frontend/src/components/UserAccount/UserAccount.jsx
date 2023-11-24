import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import UserPosts from "./UserPosts";

const UserAccount = () => {
  const { userInfo } = useContext(UserContext); //ezt honnét szedI??
  const [data, setData] = useState([]); //az id alapján visszaszedett datát tesszük ebbe be
  const [temp, setTemp] = useState(userInfo.id);

  useEffect(() => {
    fetch("http://localhost:4000/myaccount/" + temp).then((response) => {
      response.json().then((data) => {
        console.log("xx");
        console.log(userInfo.id);
        setData(data);
      });
    });
  }, []);

  if (!data) return "";

  console.log("mivvan benne");
  console.log(userInfo.id);
  return (
    <div>
      <div>
        <label>username: </label>
        <div>{userInfo.userName}</div>
      </div>
      <div>
        <label>e-mail: </label>
        <div>{data.email}</div>
      </div>

      <div>
        <button>change data</button>
        <button>delete your acc</button>
      </div>
      <div></div>
    </div>
  );
};

export default UserAccount;
