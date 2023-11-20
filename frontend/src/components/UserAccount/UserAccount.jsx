import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import UserPosts from "./UserPosts";

const UserAccount = () => {
  const { userInfo } = useContext(UserContext); //ezt honnét szedI??

  console.log(userInfo);
  return (
    <div>
      <div>{userInfo.userName}</div>
      <div>emailcim</div>
      <div>passworld</div>
      <div>
        <button>change datas</button>
        <button>delete your acc</button>
      </div>
      <div>
        <UserPosts />
      </div>
    </div>
  );
};

export default UserAccount;
