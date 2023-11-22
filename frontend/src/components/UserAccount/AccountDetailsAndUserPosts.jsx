import UserPosts from "./UserPosts";
import UserAccount from "./UserAccount";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";

const AccountDetailsAndUserPosts = () => {
  const { userInfo } = useContext(UserContext); //ez lehet nem is kell
  return (
    <div>
      <div>
        <UserAccount />
        <div>nyini</div>
        <UserPosts />
      </div>
    </div>
  );
};

export default AccountDetailsAndUserPosts;
