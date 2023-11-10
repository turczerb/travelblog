import styled from "styled-components"; //css
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUpConti = styled.div``;
const PopUpBody = styled.div``;

const PopUp = ({ visible }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/");
  };

  return visible ? (
    <PopUpConti>
      <PopUpBody>
        <h1>Your post has been sent!</h1>
        <p>
          After validation by the admin your post will be available on the
          website!
        </p>
        <p>Thank you!</p>
        <button onClick={changePage}>OK</button>
      </PopUpBody>
    </PopUpConti>
  ) : (
    <></>
  );
};

export default PopUp;
