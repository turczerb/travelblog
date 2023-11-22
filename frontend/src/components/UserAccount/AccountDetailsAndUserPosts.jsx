import UserPosts from "./UserPosts";
import UserAccount from "./UserAccount";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"; //css

const AccPostContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  margin: 20px;
`;

const Container = styled.div``;

const AccountDetailsAndUserPosts = () => {
  const { userInfo } = useContext(UserContext); //ez lehet nem is kell
  return (
    <Container>
      <AccPostContainer>
        <div></div>
        <UserAccount />
        <UserPosts />
        <></>
      </AccPostContainer>
    </Container>
  );
};

export default AccountDetailsAndUserPosts;
